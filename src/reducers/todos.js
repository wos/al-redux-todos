import { filters } from "../const/filters.js";
const todos = (state = { todos: [], filteredTodos: [] }, action) => {
  let nextState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD_TODO":
      nextState.todos = [
        ...nextState.todos,
        {
          text: action.payload,
          isCompleted: false
        }
      ];
      nextState.filteredTodos = nextState.todos.filter(
        filters[nextState.filter].do
      );
      return nextState;
    case "TOGGLE_TODO":
      nextState.todos = nextState.todos.map(
        (todo, index) =>
          index === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
      );
      return nextState;
    case "REMOVE_TODO":
      nextState.todos = nextState.todos.filter(
        (todo, index) => index !== action.payload
      );
      return nextState;
    case "FILTER_TODO":
      nextState.filteredTodos = state.todos.filter(filters[action.payload].do);
      return nextState;
    default:
      return state;
  }
};

export default todos;
