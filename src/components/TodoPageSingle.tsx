import React = require("react");
import TodoView from "./TodoView";
import { inject } from 'mobx-react';
import Todo from "../stores/Todo";
import {Link} from "react-router";

interface TodoPageSingleProps {
  params : {
    id: number
  },
  todos: {
    todos: Todo[]
  }
}

@inject("todos")
export default class TodoPageSingle extends React.Component<TodoPageSingleProps,{}> {
  render() {
    const id = this.props.params.id;
    let todo = this.props.todos.todos[id];

    return (
        <div>
          <TodoView todo={todo} />
          <Link to="/">Back</Link>
        </div>
    )
  }
}
