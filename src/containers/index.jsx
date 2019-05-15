// @flow

import React, { Component } from "react";

import { connect } from "react-redux";
import { toggleTodo, removeTodo, addTodo, filterTodo } from "../actions/index";
import { filters } from "../const/filters";
import { Filter } from "../flowTypes/filters.js";
import { Todo } from "../flowTypes/todo.js";


type Props = {
  todos: Array<Todo>,
  filter: Filter,
  length: number,

};

const style = {
  aButton: {
    display: "inline",
    textDecoration: "underline",
    border: "none",
    background: "none",
  },
};

class Index extends Component<Props> {
  constructor(props) {
    super(props);
    this.onKeypress = this.onKeypress.bind(this);
  }

  onKeypress(event) {
    if (event.keyCode === 13) {
      this.props.addTodo(this.newTodo.value);
      this.newTodo.value = "";
    }
  }

  render() {
    return (
      <div>
        <div>Общее количество:{this.props.length}</div>
        <div>
          {Object.keys(filters).map(key => (
            <label>
              <input
                type="radio"
                name="filter"
                checked={key === this.props.filter ? "checked" : null}
                onClick={this.props.filterTodo.bind(this, key)}
              />
              {filters[key].name}
            </label>
          ))}
        </div>
        {Object.keys(this.props.todos).map(id => {
          return (
            <div key={id}>
              <span onClick={this.props.toggleTodo.bind(this, id)}>
                <input
                  type="checkbox"
                  checked={this.props.todos[id].isCompleted ? "checked" : ""}
                  className="checkbox"
                />
                {this.props.todos[id].text}
              </span>
              (<button
                style={style.aButton}
                onClick={this.props.removeTodo.bind(this, id)}
              >
                Убрать
              </button>)
            </div>
          );
        })}

        <div>
          <input
            type="text"
            ref={newTodo => (this.newTodo = newTodo)}
            onKeyDown={this.onKeypress}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const filteredTodo = {};
  for (let key in state.todos) {
    if (filters[state.filter].do(state.todos[key])) {
      filteredTodo[key] = state.todos[key];
    }
  }
  return {
    todos: filteredTodo,
    filter: state.filter,
    length: state.todos.length,
  };
};
const mapDispatchToProps = { toggleTodo, removeTodo, addTodo, filterTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Index);
