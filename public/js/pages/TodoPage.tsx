import React = require("react");
import { Link } from 'react-router';
import TodoList from "./components/TodoList";
import Todo from "../stores/Todo";
import { inject } from 'mobx-react';

declare interface TodoPageProps {
  todos: Todo[];
}

@inject("todos")
export default class TodoPage extends React.Component<TodoPageProps,{}> {
  render() {
    return (
        <div className="container">
          <TodoList store={this.props.todos} />
          <br />
          <Link to="/single/0">Item 0</Link>
          <br />
          <Link to="/single/1">Item 1</Link>
        </div>
    );
  }
}