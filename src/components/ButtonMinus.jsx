import React, { Component } from "react";

class ButtonMinus extends Component {
  state = {};

  handleOnClick = (event) => {
    console.log("Button Pressed");
  };

  render() {
    return (
      <div>
        <h3>This is ButtonMinus</h3>
        <button
          className="btn btn-success"
          onClick={this.handleOnClick}
          type="button"
        >
          +
        </button>
      </div>
    );
  }
}

export default ButtonMinus;
