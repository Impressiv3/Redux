import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import { store } from "./features/store";
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <CssBaseline >
      <App />
      </CssBaseline>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
