import React, { Component } from "react";

class ButtonPlus extends Component {
  render() {
    return (
      <div>
        <h3>This is ButtonMinus</h3>
        <button className="btn btn-success" onClick={this.props.onClick}>
          +
        </button>
      </div>
    );
  }
}

export default ButtonPlus;
