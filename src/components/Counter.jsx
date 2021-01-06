import React from "react";

//Import Styles
import "./styles/Counter.css";

const Counter = () => {
  return (
    <div>
      <div className="card card-width">
        <div className="card-body">
          <h5 className="card-title text-center">
            <strong>Counter Display</strong>
          </h5>
          <p className="card-text text-justify">
            Please, press the Plus (+) to increase the counter or the (-) Button
            to decrease the counter.
          </p>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
