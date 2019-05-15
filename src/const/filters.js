import { Todo } from "../flowTypes/todo.js";

const filterAll = () => true;
const filterCompleted = (todo: Todo) => todo.isCompleted;
const filterUncompleted = (todo: Todo) => !todo.isCompleted;

export const filters = {
  ALL: { do: filterAll, name: "Все" },
  UNCOMPLETED: { do: filterUncompleted, name: "Активные" },
  COMPLETED: { do: filterCompleted, name: "Завершенные" },
};
