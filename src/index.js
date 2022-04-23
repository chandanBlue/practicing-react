import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import Login from "./Login";
// import MyApi from "./FetchApi";
// import ContactFormComponent from "./ContactForm";
// import App2 from "./App2";
// import FetchApi from "./FetchApi";
import FetchApi2 from "./FetchApi2";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FetchApi2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
