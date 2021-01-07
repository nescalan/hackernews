import React, { Component } from "react";

class ButtonMinus extends Component {
  // state = { counterMinus: 0 };

  // handleOnClickMinus = () => {
  //   this.setState({
  //     ...this.state,
  //     counterMinus: this.state.counterMinus - 1,
  //   });
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <h3>This is ButtonMinus</h3>
        <button
          className="btn btn-success"
          onClick={this.props.onClick}
          // buttonMinusValues={}
        >
          -
        </button>
      </div>
    );
  }
}

export default ButtonMinus;
