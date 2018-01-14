import { observable } from "mobx";
import PeopleModel from '../models/PeopleModel';

export default class TodoModel {
  id = Math.random();
  @observable task;
  @observable assignee = new PeopleModel('unassigned');
  @observable finished = false;

  constructor(item) {
    Object.assign(this, item);
  }
}
