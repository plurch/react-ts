import React = require("react");
import TodoView from "./components/TodoView";
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
          {todo ? <TodoView todo={todo} /> : <div>Not Found</div>}
          <Link to="/">Home</Link>
        </div>
    )
  }
}