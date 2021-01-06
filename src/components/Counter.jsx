import React from "react";

//Import Styles
import "./styles/Counter.css";

const Counter = () => {
  return (
    <div>
      <div className="card card-width">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">
            <strong>Counter Display</strong>
          </h5>
          <p className="card-text">
            Please, press the Plus (+) to increase the counter or the (-) Button
            to decrease the counter.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Counter;
