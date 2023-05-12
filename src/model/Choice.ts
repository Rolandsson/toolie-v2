export type ChoiceChangeHandler = (target: HTMLInputElement) => void;
export type ChoiceSubmitHandler = (value: string) => void;
export type ChoiceClickHandler = () => void;

export interface Choice {
  name?: string;
  key?: string;
  type?: any;
  tag?: string;
  text?: string;
  orient?: string;
  placeholder?: string;
  onChange?: ChoiceChangeHandler;
  onSubmit?: ChoiceSubmitHandler;
  onClick?: ChoiceClickHandler;
}


