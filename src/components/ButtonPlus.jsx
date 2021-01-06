import React, { Component } from "react";

class ButtonPlus extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>This is ButtonPlus</h3>
        <button type="button" class="btn btn-success">
          +
        </button>
      </div>
    );
  }
}

export default ButtonPlus;
