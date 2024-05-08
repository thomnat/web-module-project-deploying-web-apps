import React from "react";

export default class Todo extends React.Component {

  render() {
    
    return (
      <div onClick={this.props.onClickTodo(this.props.todo.id)}>
        <span>
          {this.props.todo.name}
          {this.props.todo.completed ? " ✔️" : ""}
        </span>
      </div>
    );
  }
}
