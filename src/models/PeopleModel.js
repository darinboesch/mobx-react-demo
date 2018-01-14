import { observable } from "mobx";

export default class PeopleModel {
  id = Math.random();
  @observable name;

  constructor(name) {
    this.name = name;
  }
}
