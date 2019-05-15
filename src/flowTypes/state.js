// @flow
import type { Todo } from "./todo";
import type { Filter } from "./filters";

export type State = {
  todos: Array<Todo>,
  filter: Filter,
};
