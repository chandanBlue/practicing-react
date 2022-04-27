import React from "react";
var z = 100;

const Child = (props) => {
  props.childProp(z);

  return <div>Data coming from parent to child is {props.childVar}</div>;
};

export default Child;
