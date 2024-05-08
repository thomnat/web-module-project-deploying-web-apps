import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        {this.props.todos.map((todo) => {
          if (this.props.displayCompleted || !todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onClickTodo={this.props.onClickTodo}
              />
            );
          } else {
            return <div key={todo.id}></div>;
          }
        })}
      </div>
    );
  }
}
