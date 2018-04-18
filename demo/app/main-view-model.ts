import { Observable } from 'tns-core-modules/data/observable';
import { Checkbox } from 'nativescript-checkbox';

export class HelloWorldModel extends Observable {
  public message: string;
  private checkbox: Checkbox;

  constructor() {
    super();

    this.checkbox = new Checkbox();
    this.message = this.checkbox.message;
  }
}
