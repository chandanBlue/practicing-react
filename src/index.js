import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import FetchApi from "./FetchApi";
// import FetchApi2 from "./FetchApi2";
// import EventHandle from "./EventHandle";
// import ParentFile from "./ParentFile";
// import ExampleUseEffect from "./UseEffectExample";
// import FetchApiAsyncAwait from "./FetchApiAsyncAwait";
import LoginForm from "./LoginForm";
import File1 from "./F1";
import Child from "./Child";
import ParentFile from "./ParentFile";
import Table from "./table";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginForm />
    {/* <FetchApi /> */}
    {/* <FetchApi2 /> */}
    {/* <Table /> */}
    {/* <ParentFile /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
