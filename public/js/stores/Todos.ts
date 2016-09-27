import {observable, computed, extendObservable} from 'mobx';
import Todo from "./Todo";

export default class ObservableTodoStore {
  todos: Todo[];
  pendingRequests: number;

  get completedTodosCount() {
    return this.todos.filter(
        todo => todo.completed === true
    ).length;
  }

  get report() {
    if (this.todos.length === 0) {
      return "<none>";
    }
    let next = this.todos.filter(todo => !todo.completed)[0];
    let nextTask = next ? next.task : "All is done! Good Job!";

    return `Next todo: "${nextTask}". 
        Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  constructor () {
    extendObservable(this, {
      todos: [],
      pendingRequests: 0
    });
  }

  addTodo(task: string) {
    this.todos.push(new Todo(task));
  }
}

