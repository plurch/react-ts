import React = require("react");
import TodoView from "./TodoView";

import Todos from "../stores/Todos";

let todoStore = new Todos();

interface TodoPageSingleProps {
  params : any
}

export default class TodoPageSingle extends React.Component<TodoPageSingleProps,{}> {
  render() {
    const id = this.props.params.id;
    let todo = todoStore.todos[id];

    return (
        <TodoView todo={todo} />
    );
  }
}
