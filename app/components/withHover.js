import React from "react"

export default function withHover(Component, propName = "hovering") {
  return class WithHover extends React.Component {
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
      const props = {
        [propName]: this.state.hovering,
        ...this.props,
      }
      return (
        <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
          <Component {...props} />
        </div>
      )
    }
  }
}
