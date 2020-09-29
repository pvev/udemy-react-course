import React from "react";

const ValidationComponent = (props) => {
  const text =
    props.length > 0 && props.length < 5
      ? "text too short"
      : props.length > 10
      ? "text too large"
      : "";
  return <p>{text}</p>;
};

export default ValidationComponent;
