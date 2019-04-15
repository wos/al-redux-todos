const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.payload,
          isCompleted: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        index === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    default:
      return state;
  }
};

export default todos;
