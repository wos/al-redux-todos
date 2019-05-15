import {
  ADD_TODO,
  FILTER_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../const/actions.js";

export type Action = {
  type: ADD_TODO | FILTER_TODO | REMOVE_TODO | TOGGLE_TODO,
  payload: number | string,
};
