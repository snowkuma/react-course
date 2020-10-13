import React from "react"
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa"
import PlayerInput from "../components/playerInput"
import PlayerPreview from "../components/playerPreview"
import { ThemeConsumer } from "../contexts/theme"
import { Link } from "react-router-dom"

function Instructions() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <div className="instructions">
          <h1 className="center-text header-lg">Instructions</h1>
          <ol className="container-sm grid center-text battle-instructions">
            <li>
              <h3 className="header-sm">Enter two Github users</h3>
              <FaUserFriends
                className={`bg-${theme}`}
                color="rgb(255, 191, 116)"
                size={140}
              />
            </li>
            <li>
              <h3 className="header-sm">Battle</h3>
              <FaFighterJet
                className={`bg-${theme}`}
                color="#727272"
                size={140}
              />
            </li>
            <li>
              <h3 className="header-sm">See the winners</h3>
              <FaTrophy
                className={`bg-${theme}`}
                color="rgb(255, 215, 0)"
                size={140}
              />
            </li>
          </ol>
        </div>
      )}
    </ThemeConsumer>
  )
}

export default function Battle() {
  const [playerOne, setPlayerOne] = React.useState(null)
  const [playerTwo, setPlayerTwo] = React.useState(null)

  const handleSubmit = (id, player) =>
    id === "playerOne" ? setPlayerOne(player) : setPlayerTwo(player)

  const handleReset = (id) =>
    id === "playerOne" ? setPlayerOne(null) : setPlayerTwo(null)

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <React.Fragment>
          <Instructions />
          <div className="players-container">
            <h1 className="center text header-lg">Players</h1>
            <div className="row space-around">
              {!playerOne ? (
                <PlayerInput
                  label="Player 1"
                  onSubmit={(player) => handleSubmit("playerOne", player)}
                />
              ) : (
                <PlayerPreview
                  label="Player One"
                  username={playerOne}
                  onReset={() => handleReset("playerOne")}
                />
              )}

              {!playerTwo ? (
                <PlayerInput
                  label="Player 2"
                  onSubmit={(player) => handleSubmit("playerTwo", player)}
                />
              ) : (
                <PlayerPreview
                  label="Player Two"
                  username={playerTwo}
                  onReset={() => handleReset("playerTwo")}
                />
              )}
            </div>

            {playerOne && playerTwo && (
              <Link
                className={`btn ${
                  theme === "dark" ? "light-btn" : "dark-btn"
                } btn-space`}
                to={{
                  pathname: "/battle/results",
                  search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
                }}
              >
                Battle
              </Link>
            )}
          </div>
        </React.Fragment>
      )}
    </ThemeConsumer>
  )
}
