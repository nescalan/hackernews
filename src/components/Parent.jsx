import React, { Component } from "react";

//import Component
import Child from "./Child";

class Parent extends Component {
  state = {};

  doSomething() {
    console.log("Parent Component");
  }

  render() {
    return (
      <div>
        <Child
          text="This is the child number 1"
          title="Title 1"
          onClick={this.doSomething}
        />
        <Child
          text="This is the child number 2"
          title="Title 2"
          onClick={this.doSomething}
        />
      </div>
    );
  }
}

export default Parent;
