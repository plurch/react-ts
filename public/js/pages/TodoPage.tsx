import React = require("react");
import { Link } from 'react-router';
import { inject } from 'mobx-react';

import TodoList from "./components/TodoList";
import ObservableTodoStore from "../stores/Todos";

interface TodoPageProps {
  todoStore: ObservableTodoStore;
}

@inject("todoStore")
export default class TodoPage extends React.Component<TodoPageProps,{}> {
  render() {
    return (
        <div className="container-fluid">
          <TodoList store={this.props.todoStore} />
          <br />
          <Link to="/single/0">Item 0</Link>
          <br />
          <Link to="/single/1">Item 1</Link>
        </div>
    );
  }
}