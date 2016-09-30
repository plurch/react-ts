import {observable} from 'mobx';

export default class Todo {

  @observable task : string;
  @observable completed : boolean;
  @observable assignee : any;
  
  constructor (task = '', completed = false, assignee = {
    name: "John",
    lastname: "Doe"
  }) {
    this.task = task;
    this.completed = completed;
    this.assignee = assignee;
  }
}