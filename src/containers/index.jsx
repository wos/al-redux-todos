import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";

class Index extends Component {
  onKeypress(symbol) {
    console.log(symbol);
  }

  render() {
    return (
      <div>
        <div>Количество:{this.props.todos.length}</div>
        {this.props.todos.map((item, id) => (
          <div key={id} onClick={this.props.toggleTodo.bind(this, id)}>
            <input
              type="checkbox"
              checked={item.isCompleted ? "checked" : ""}
              className="checkbox"
            />
            {item.text}
          </div>
        ))}

        <input type="text" onKeyDown={this.onKeypress} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state });
const mapDispatchToProps = { toggleTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
