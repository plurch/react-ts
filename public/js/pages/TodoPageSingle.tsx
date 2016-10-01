import React = require("react");
import { inject } from 'mobx-react';
import {Link} from "react-router";

import TodoView from "./components/TodoView";
import Todo from "../stores/Todo";

interface TodoPageSingleProps {
  params : {
    id: number
  },
  todoStore: {
    todos: Todo[]
  }
}

@inject("todoStore")
export default class TodoPageSingle extends React.Component<TodoPageSingleProps,{}> {
  render() {
    const id = this.props.params.id;
    let todo = this.props.todoStore.todos.length > id ? this.props.todoStore.todos[id] : undefined;

    return (
        <div className="container-fluid">
          {todo ? <TodoView todo={todo} /> : <div>Not Found</div>}
          <Link to="/">Home</Link>
        </div>
    )
  }
}
