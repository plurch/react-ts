import React = require("react");
import ReactDOM = require("react-dom");
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';
import ObservableTodoStore from './stores/Todos';

import TodoPage from "./pages/TodoPage";
import TodoPageSingle from "./pages/TodoPageSingle";

let todos = new ObservableTodoStore();

ReactDOM.render(
  <Provider todos={todos}>
    <Router history={hashHistory}>
      <Route path="/" component={TodoPage}></Route>
      <Route path="/single/:id" component={TodoPageSingle}></Route>
    </Router>
  </Provider>,

  document.getElementById("main")
);
