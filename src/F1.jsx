import React from "react";

function File1(props) {
  return (
    <>
      <div>Data coming from parent to child is {props.childVar}</div>
    </>
  );
}

export default File1;
