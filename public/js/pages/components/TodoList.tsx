import React = require("react");
import {observer} from 'mobx-react';
import TodoView from "./TodoView";

interface TodoListProps {
  store : any
}

@observer
export default class TodoList extends React.Component<TodoListProps,{}> {
  render() {
    const store = this.props.store;
    return (
        <div>
          { store.report }
          <ul>
            { store.todos.map(
                (todo : any, idx: number) => <TodoView todo={ todo } key={ idx } />
            ) }
          </ul>
          { store.pendingRequests > 0 ? <span>Loading...</span> : null }
          <button onClick={ this.onNewTodo }>New Todo</button>
          <small> (double-click a todo to edit) <i className="fa fa-bicycle" aria-hidden="true"></i> <span className="glyphicon glyphicon-ok" aria-hidden="true"></span></small>
        </div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}
