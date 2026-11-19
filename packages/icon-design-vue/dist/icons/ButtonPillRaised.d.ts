import type { DefineComponent } from 'vue';

export interface ButtonPillRaisedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonPillRaised: DefineComponent<ButtonPillRaisedProps>;

export default ButtonPillRaised;
export { ButtonPillRaised };
