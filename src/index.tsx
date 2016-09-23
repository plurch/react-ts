import React = require("react");
import ReactDOM = require("react-dom");

import TodoList from "./components/TodoList";

import Todos from "./stores/Todos";

let todoStore = new Todos();

ReactDOM.render(
    <TodoList store={todoStore} />,
    document.getElementById("example")
);
