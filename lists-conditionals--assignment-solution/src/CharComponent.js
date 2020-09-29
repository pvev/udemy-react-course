import React from "react";

const styles = {
  display: "inline-block",
  margin: "5px",
  border: "2px solid",
  padding: "4px",
  width: "15px",
  textAlign: "center",
};

const CharComponent = (props) => {
  return (
    <div style={styles} onClick={props.delete}>
      {props.c}
    </div>
  );
};

export default CharComponent;
