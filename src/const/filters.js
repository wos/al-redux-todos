const filterAll = () => true;
const filterCompleted = todo => todo.isCompleted;
const filterUncompleted = todo => !todo.isCompleted;

export const filters = {
  ALL: { do: filterAll, name: "Все" },
  UNCOMPLETED: { do: filterUncompleted, name: "Активные" },
  COMPLETED: { do: filterCompleted, name: "Завершенные" }
};
