import React, { Component } from "react";

//Import Styles
import "./styles/Counter.css";

//import Component

class Counter extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="card card-width">
          <div className="card-body">
            <h5 className="card-title text-center">
              <strong>Counter Display</strong>
            </h5>
            <p className="card-text text-justify">
              Please, press the Plus (+) to increase the counter or the (-)
              Button to decrease the counter.
            </p>
            <input type="text" placeholder={this.props.contador} autoFocus />
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
