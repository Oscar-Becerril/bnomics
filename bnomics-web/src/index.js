import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Amplify.configure(aws_exports);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
