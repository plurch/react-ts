import {observable, computed} from 'mobx';
import Todo from "./Todo";

export default class ObservableTodoStore {
  @observable todos: Todo[] = [];
  @observable pendingRequests: number;

  @computed get completedTodosCount() : number {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed get report() : string {
    if (this.todos.length === 0) {
      return "<none>";
    }
    let next = this.todos.filter(todo => !todo.completed)[0];
    let nextTask = next ? next.task : "All is done! Good Job!";

    return `Next todo: "${nextTask}". 
        Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  addTodo(task: string) {
    this.todos.push(new Todo(task));
  }
}
