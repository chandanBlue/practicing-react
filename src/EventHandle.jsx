import React from "react";

function EventHandle(props) {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default EventHandle;
