import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow={props.value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: props.width }}
      ></div>
    </div>
  );
};

// Defaul Props
ProgressBar.defaultProps = {
  value: "0",
  width: "0%",
};

export default ProgressBar;
