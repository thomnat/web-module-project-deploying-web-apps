import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

let id = 0;

const getId = () => ++id;

const initialTodos = [
  { name: "Laundry", id: getId(), completed: false },
  { name: "Feed bunny", id: getId(), completed: false },
  { name: "Dishes", id: getId(), completed: false },
];

export default class App extends React.Component {
  state = {
    todos: initialTodos,
    input: "",
    shouldShowCompleted: true,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({
        id: getId(),
        name: this.state.input,
        completed: false,
      }),
      input: "",
    });
  };

  onChange = (e) => {
    this.setState({ ...this.state, input: e.target.value });
  };

  toggleShouldShow = () => {
    this.setState({
      ...this.state,
      shouldShowCompleted: !this.state.shouldShowCompleted,
    });
  };

  toggleCompleted = (id) => () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          displayCompleted={this.state.shouldShowCompleted}
          onClickTodo={this.toggleCompleted}
        />
        <Form
          value={this.state.input}
          onChange={this.onChange}
          disabled={!this.state.input.length}
          onSubmit={this.onSubmit}
          toggleShouldShow={this.toggleShouldShow}
          shouldShow={this.state.shouldShowCompleted}
        />
      </div>
    );
  }
}
