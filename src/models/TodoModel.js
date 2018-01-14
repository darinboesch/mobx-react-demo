import { observable } from "mobx";

export default class TodoModel {
  id = Math.random();
  @observable task;
  @observable assignee;
  @observable finished = false;

  constructor(task) {
    this.task = task;
  }
}
