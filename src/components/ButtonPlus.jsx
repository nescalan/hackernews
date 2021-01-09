import React, { Component } from "react";

class ButtonPlus extends Component {
<<<<<<< HEAD
  // state = { counterPlus: 0 };

  // handleOnClick = (event) => {
  //   this.setState({
  //     ...this.state.counterPlus,
  //     counterPlus: this.state.counterPlus + 1,
  //   });
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <h3>This is ButtonPlus</h3>
        <button
          className="btn btn-success"
          onClick={this.props.onClick}
          type="button"
        >
=======
  render() {
    return (
      <div>
        <h3>This is Button Plus</h3>
        <button className="btn btn-success" onClick={this.props.onClick}>
>>>>>>> 1a66f76468751451fa6cde102c84108dafc4ebf1
          +
        </button>
      </div>
    );
  }
}

export default ButtonPlus;
