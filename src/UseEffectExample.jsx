import React, { useEffect, useState } from "react";

const ExampleUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`;
  });

  return (
    <div>
      You clicked {count} times
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default ExampleUseEffect;
