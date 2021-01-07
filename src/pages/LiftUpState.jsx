import React, { Component } from "react";

//import Components
import ButtonPlus from "../components/ButtonPlus";
import Counter from "../components/Counter";
import ButtonMinus from "../components/ButtonMinus";

class LiftUpState extends Component {
  state = { mainCounter: 0 };

  handleOnChangeMinus = () => {
    this.setState({
      ...this.state.mainCounter,
      mainCounter: this.state.mainCounter - 1,
    });
  };

  handleOnChangePlus = () => {
    this.setState({
      ...this.state.mainCounter,
      mainCounter: this.state.mainCounter + 1,
    });
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
              onClick={this.handleOnChangeMinus}
              estado={this.state.mainCounter}
            />
          </div>
          <div className="col-4">
            <Counter contador={this.state.mainCounter} />
          </div>
          <div className="col-4">
            <ButtonPlus
              onClick={this.handleOnChangePlus}
              estado={this.state.mainCounter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LiftUpState;
