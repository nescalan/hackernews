import React, { Component } from "react";

//import Components
import ButtonPlus from "../components/ButtonPlus";
import Counter from "../components/Counter";
import ButtonMinus from "../components/ButtonMinus";

class LiftUpState extends Component {
  state = { mainCounter: 0 };

  handleOnClick = (event) => {
    this.setState({
      ...this.state.mainCounter,
      mainCounter: this.state.mainCounter,
    });
  };

  handleOnClickMinus = (event) => {
    // this.setState({
    //   ...this.state,
    //   mainCounter: this.state.mainCounter - 1,
    // });
    console.log(event);
  };

  render() {
    return (
      <div className="container text-center">
        <div className="row mb-5">
          <div className="col">
            <h1>Lift Up State</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <ButtonMinus
              onClick={this.props.handleOnClickMinus}
              buttonMinusValues={this.props.handleOnClickMinus}
            />
          </div>
          <div className="col-4">
            <Counter />
          </div>
          <div className="col-4">
            <ButtonPlus />
          </div>
        </div>
      </div>
    );
  }
}

export default LiftUpState;
