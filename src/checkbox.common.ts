export enum BoxType {
  circle = <any>"circle",
  square = <any>"square"
}

export interface CheckBoxInterface {
  text?: string;
  checked: boolean;
  toggle(): void;
}
