import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/css/bootstrap.min.css";
// import '../src/assets/js/bootstrap.min.js';
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
