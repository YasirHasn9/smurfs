import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// state managements --> Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// reducer
import { reducer } from "./reducers/index";

// middleware -- > thunk
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
