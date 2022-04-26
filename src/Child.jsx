import React from "react";
var z = 100;

const Child = (props) => {
  props.childProp(z);
  const clicked = () => {
    console.log("Button Clicked");
  };
  return (
    <div div>
      Hi i am Child File
      <button onClick={clicked}>Click me</button>{" "}
    </div>
  );
};

export default Child;
