import React = require("react");
import {observer} from 'mobx-react';

interface TodoViewProps {
  todo : any
}

@observer
export default class TodoView extends React.Component<TodoViewProps,{}> {
  render() {
    const todo = this.props.todo;
    return (
        <li onDoubleClick={ this.onRename }>
          <input
              type='checkbox'
              checked={ todo.completed }
              onChange={ this.onToggleCompleted }
          />
          { todo.task }
          { todo.assignee
              ? <small>{ todo.assignee.name }</small>
              : null
          }
        </li>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}