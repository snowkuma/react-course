import React from "react"
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa"
import PlayerInput from "./playerInput"

function Instructions() {
  return (
    <div className="instructions">
      <h1 className="center-text header-lg">Instructions</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two Github users</h3>
          <FaUserFriends
            className="bg-light"
            color="rgb(255, 191, 116)"
            size={140}
          />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li>
          <h3 className="header-sm">See the winners</h3>
          <FaTrophy className="bg-light" color="rgb(255, 215, 0)" size={140} />
        </li>
      </ol>
    </div>
  )
}

export default class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOne: null,
      playerTwo: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player 
    })

  }

  render() {
    const { playerOne, playerTwo } = this.state

    return (
      <React.Fragment>
        <Instructions />
        <div className="players-container">
          <h1 className="center text header-lg">Players</h1>
          <div className="row space-around">
            {!playerOne && (
              <PlayerInput
                label="Player 1"
                onSubmit={(player) => this.handleSubmit("playerOne", player)}
              />
            )}
            {!playerTwo && (
              <PlayerInput
                label="Player 2"
                onSubmit={(player) => this.handleSubmit("playerTwo", player)}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
