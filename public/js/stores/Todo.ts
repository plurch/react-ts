import {extendObservable} from 'mobx';

export default class Todo {
  
  constructor (public task : string,
               public completed : boolean = false,
               public assignee : any = {
                 name: "John",
                 lastname: "Doe"
               }) {

    //Properties inside a tod o need to be observable in order for the list view to pick up
    //changes made to them
    extendObservable(this, {
      task: this.task,
      completed: this.completed,
      assignee: assignee
    })
  }
}