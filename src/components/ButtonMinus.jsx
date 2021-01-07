import React, { Component } from "react";

class ButtonMinus extends Component {
  render() {
    return (
      <div>
        <h3>This is Button Minus</h3>
        <button className="btn btn-success" onClick={this.props.onClick}>
          -
        </button>
      </div>
    );
  }
}

export default ButtonMinus;
