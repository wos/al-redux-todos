import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../const/actions.js'
import localStorage from '../utils/localStorage.js';

export default function saver({ getState }) {
  return next => action => {
    if ([ADD_TODO, REMOVE_TODO, TOGGLE_TODO].indexOf(action.type) !== -1) {
      let state = getState();
      localStorage.setItem('todos', state.todos)
    }
    return next(action);
  };
}
