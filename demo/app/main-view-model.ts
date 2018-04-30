import { Observable } from 'tns-core-modules/data/observable';
import { CheckBox } from 'nativescript-checkbox';

export class HelloWorldModel extends Observable {
  public message: string;
  private checkbox: CheckBox;

  constructor() {
    super();

    this.checkbox = new CheckBox();
  }
}
