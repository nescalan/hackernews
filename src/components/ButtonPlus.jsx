import React, { Component } from "react";

class ButtonPlus extends Component {
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
          +
        </button>
      </div>
    );
  }
}

export default ButtonPlus;
