import React from "react";
import { useState } from "react";
// import File1 from "./F1";
import Child from "./Child";

var x = 500;

const ParentFile = () => {
  const [data, setData] = useState("");

  const handleCallback = (childData) => {
    setData(childData);
  };

  return (
    <>
      <Child childVar={x} childProp={handleCallback} />

      <div>Data coming from child is {data}</div>
    </>
  );
};

export default ParentFile;
