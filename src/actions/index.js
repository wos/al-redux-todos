export const addTodo = text => ({
  type: "ADD_TODO",
  payload: text
});

export const toggleTodo = index => ({
  type: "TOGGLE_TODO",
  payload: index
});

export const removeTodo = index => ({
  type: "REMOVE_TODO",
  payload: index
});

export const filterTodo = filterType => ({
  type: "FILTER_TODO",
  payload: filterType
});
