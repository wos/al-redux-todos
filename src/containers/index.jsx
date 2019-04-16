import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo, addTodo, filterTodo } from "../actions/index";
import { filters } from "../const/filters";

class Index extends Component {
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
        <div>Количество:{this.props.todos.length}</div>
        {Object.keys(filters).map(key => (
          <label>
            <input
              type="radio"
              name="filter"
              onClick={this.props.filterTodo.bind(this, key)}
            />
            {filters[key].name}
          </label>
        ))}

        {this.props.todos.map((item, id) => (
          <div key={id} onClick={this.props.toggleTodo.bind(this, id)}>
            <input
              type="checkbox"
              checked={item.isCompleted ? "checked" : ""}
              className="checkbox"
            />
            {item.text}
            (<a href="#" onClick={this.props.removeTodo.bind(this, id)}>
              Убрать
            </a>)
          </div>
        ))}

        <input
          type="text"
          ref={newTodo => (this.newTodo = newTodo)}
          onKeyDown={this.onKeypress}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.filteredTodos,
  filter: state.filter
});
const mapDispatchToProps = { toggleTodo, removeTodo, addTodo, filterTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Index);
