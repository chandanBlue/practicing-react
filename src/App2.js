import React from "react";
import Users from "./List";
import Info from "./Info";

function App2() {
  return (
    <div>
      <p>Mapping data from a list to react</p>
      {Users.map((e) => {
        return <Info name={e.name} rollNo={e.rollNo} />;
      })}
    </div>
  );
}

export default App2;
