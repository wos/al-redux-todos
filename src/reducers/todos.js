const todos = (state = { todos: [], filteredTodos: [] }, action) => {
  let nextState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD_TODO":
      if (action.payload) {
        nextState.todos = [
          ...nextState.todos,
          {
            text: action.payload,
            isCompleted: false
          }
        ];
      }
      return nextState;
    case "TOGGLE_TODO":
      nextState.todos = nextState.todos.map(
        (todo, index) =>
          index === parseInt(action.payload)
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
      );
      return nextState;
    case "REMOVE_TODO":
      nextState.todos = nextState.todos.filter(
        (todo, index) => index !== parseInt(action.payload)
      );
      return nextState;
    case "FILTER_TODO":
      nextState.filter = action.payload;
      return nextState;
    default:
      return state;
  }
};

export default todos;
