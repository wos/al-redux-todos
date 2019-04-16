import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import Index from "./containers/index.jsx";

import rootReducer from "./reducers";
import { addTodo, toggleTodo } from "./actions";

import logger from "./utils/logger.js";

const store = createStore(
  rootReducer,
  { filter: "ALL", todos: [], filteredTodos: [] },
  applyMiddleware(logger)
);

store.dispatch(addTodo("My Todo"));
store.dispatch(addTodo("Second Todo"));

store.dispatch(toggleTodo(0));

ReactDOM.render(<Index store={store} />, document.getElementById("root"));
