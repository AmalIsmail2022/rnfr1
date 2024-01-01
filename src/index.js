import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//  bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//  bootstrap
import { Provider } from "react-redux";
import store from "../src/redux/store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
