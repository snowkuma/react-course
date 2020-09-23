import React from "react"

export default class Hover extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false,
    }

    this.onMouseOver = this.mouseOver.bind(this)
    this.onMouseOut = this.mouseOut.bind(this)
  }

  mouseOver() {
    this.setState({
      hovering: true,
    })
  }

  mouseOut() {
    this.setState({
      hovering: false,
    })
  }

  render() {
    return (
      <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}
