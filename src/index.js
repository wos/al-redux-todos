import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import Index from "./containers/index.jsx";

import rootReducer from "./reducers";

import logger from "./utils/logger.js";
import saver from "./utils/saver.js";
import localStorage from "./utils/localStorage.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  {
    filter: "ALL",
    todos: localStorage.getItem("todos") || [],
    filteredTodos: [],
  },
  composeEnhancers(applyMiddleware(logger, saver))
);

ReactDOM.render(<Index store={store} />, document.getElementById("root"));
