import React, { Component } from "react";

//import Components
import ButtonPlus from "../components/ButtonPlus";
import Counter from "../components/Counter";
import ButtonMinus from "../components/ButtonMinus";

class LiftUpState extends Component {
  state = {};
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
            <ButtonMinus />
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
