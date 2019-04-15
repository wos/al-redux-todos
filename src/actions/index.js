export const addTodo = text => ({
  type: "ADD_TODO",
  payload: text
});

export const toggleTodo = index => ({
  type: "TOGGLE_TODO",
  payload: index
});
