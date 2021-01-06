import React, { Component } from "react";

class ButtonMinus extends Component {
  state = { counterMinus: 0 };

  handleOnClickMinus = (event) => {
    this.setState({
      ...this.state,
      counterMinus: this.state.counterMinus - 1,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h3>This is ButtonMinus</h3>
        <button
          className="btn btn-success"
          onClick={this.handleOnClickMinus}
          type="button"
          value={this.props.buttonMinusValues.counterMinus}
        >
          -
        </button>
      </div>
    );
  }
}

export default ButtonMinus;
