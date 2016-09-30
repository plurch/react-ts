import React = require("react");
import ReactDOM = require("react-dom");
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';
import ObservableTodoStore from './stores/Todos';

import App from "./pages/App";
import TodoPage from "./pages/TodoPage";
import TodoPageSingle from "./pages/TodoPageSingle";

// add styling using webpack loaders:
import '../scss/main.scss';

let todoStore = new ObservableTodoStore();

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TodoPage}/>
        <Route path="single/:id" component={TodoPageSingle} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById("main")
);
