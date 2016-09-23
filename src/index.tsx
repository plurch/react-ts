import React = require("react");
import ReactDOM = require("react-dom");
import { Router, Route } from 'react-router';
import { inject, Provider } from 'mobx-react';
import ObservableTodoStore from './stores/Todos';

import TodoPage from "./components/TodoPage";
import TodoPageSingle from "./components/TodoPageSingle";

let todos = new ObservableTodoStore();


ReactDOM.render(
  <Provider todos={todos}>
    <Router>
      <Route path="/" component={TodoPage}></Route>
      <Route path="/single/:id" component={TodoPageSingle}></Route>
    </Router>
  </Provider>,

    document.getElementById("example")
);


// <Route path="single" component={About}/>
// <Route path="*" component={NoMatch}/>

// <TodoList store={todoStore} />,