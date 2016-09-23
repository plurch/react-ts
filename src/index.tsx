import React = require("react");
import ReactDOM = require("react-dom");
import { Router, Route, browserHistory } from 'react-router';

import TodoPage from "./components/TodoPage";
import TodoPageSingle from "./components/TodoPageSingle";



ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={TodoPage}>
        <Route path="single/:id" component={TodoPageSingle}/>
      </Route>
    </Router>,

    document.getElementById("example")
);


// <Route path="single" component={About}/>
// <Route path="*" component={NoMatch}/>

// <TodoList store={todoStore} />,