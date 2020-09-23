import React from "react"
import { battle } from "../utils/api"
import Card from "./card"
import ProfileList from "./profileList"
import PropTypes from "prop-types"
import Loading from "./loading"
import { ThemeConsumer, ThemeProvider } from "../contexts/theme"

const styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
  },
}

export default class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    const { playerOne, playerTwo } = this.props
    console.log(playerOne, playerTwo)
    battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          isLoading: false,
        })
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          isLoading: false,
        })

        console.log("data: ", players)
      })
  }

  render() {
    const { winner, loser, error, isLoading } = this.state

    if (isLoading) {
      return <Loading text="Battling" />
    }

    if (error) {
      return <p className="center-text error">{error}</p>
    }

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <React.Fragment>
            <div className="grid space-around container-sm">
              <Card
                header={winner.score === loser.score ? "Tie" : "Winner"}
                avatar={winner.profile.avatar_url}
                subheader={`Score: ${winner.score.toLocaleString()}`}
                href={winner.profile.html_url}
                name={winner.profile.login}
              >
                <ProfileList profile={winner.profile} />
              </Card>

              <Card
                header={winner.score === loser.score ? "Tie" : "Loser"}
                avatar={loser.profile.avatar_url}
                subheader={`Score: ${loser.score.toLocaleString()}`}
                href={loser.profile.html_url}
                name={loser.profile.login}
              >
                <ProfileList profile={loser.profile} />
              </Card>
            </div>
            <button
              className={`btn btn-space ${
                theme === "dark" ? "light-btn" : "dark-btn"
              }`}
              onClick={this.props.onReset}
            >
              Reset
            </button>
          </React.Fragment>
        )}
      </ThemeConsumer>
    )
  }
}

Results.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
}
