import React from "react"
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa"
import PlayerInput from "./playerInput"
import PlayerPreview from "./playerPreview"
import Results from "./results"

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
      battle: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player,
    })
  }

  handleReset(id) {
    this.setState({
      [id]: null,
    })
  }

  render() {
    const { playerOne, playerTwo, battle } = this.state

    if (battle === true) {
      return (
        <Results 
          playerOne={playerOne}
          playerTwo={playerTwo}
          onReset={() => 
            this.setState({
              playerOne: null,
              playerTwo: null,
              battle: false
            })}
            />
      )
    }

    return (
      <React.Fragment>
        <Instructions />
        <div className="players-container">
          <h1 className="center text header-lg">Players</h1>
          <div className="row space-around">
            {!playerOne ? (
              <PlayerInput
                label="Player 1"
                onSubmit={(player) => this.handleSubmit("playerOne", player)}
              />
            ) : (
              <PlayerPreview
                label=""
                username={this.state.playerOne}
                onReset={() => {
                  this.handleReset("playerOne")
                }}
              />
            )}
            {!playerTwo ? (
              <PlayerInput
                label="Player 2"
                onSubmit={(player) => this.handleSubmit("playerTwo", player)}
              />
            ) : (
              <PlayerPreview
                label=""
                username={this.state.playerTwo}
                onReset={() => {
                  this.handleReset("playerTwo")
                }}
              />
            )}
          </div>

          {playerOne && playerTwo && (
            <button 
              className="btn dark-btn btn-space"
              onClick={() => this.setState({battle: true})}>
              Battle 
            </button>
          )}
        </div>
      </React.Fragment>
    )
  }
}
