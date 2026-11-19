import type { DefineComponent } from 'vue';

export interface ButtonPillHandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonPillHand: DefineComponent<ButtonPillHandProps>;

export default ButtonPillHand;
export { ButtonPillHand };
