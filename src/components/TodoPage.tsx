import React = require("react");
import { Link } from 'react-router';
import TodoList from "./TodoList";

import Todos from "../stores/Todos";

let todoStore = new Todos();


export default class TodoPage extends React.Component<{},{}> {
  render() {
    return (
        <div>
          <TodoList store={todoStore} />
          <br />
          <Link to="/single/0">Item 0</Link>
          <br />
          <Link to="/single/1">Item 1</Link>
        </div>

    );
  }
}