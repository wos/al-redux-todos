// @flow
import {
  ADD_TODO,
  FILTER_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../const/actions.js";

import { Filter } from "../flowTypes/filters.js";

export const addTodo: { type: number, payload: number } = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (index: number) => ({
  type: TOGGLE_TODO,
  payload: index,
});

export const removeTodo = (index: number) => ({
  type: REMOVE_TODO,
  payload: index,
});

export const filterTodo = (filterType: Filter) => ({
  type: FILTER_TODO,
  payload: filterType,
});
