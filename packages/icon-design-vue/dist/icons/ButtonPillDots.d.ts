import type { DefineComponent } from 'vue';

export interface ButtonPillDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonPillDots: DefineComponent<ButtonPillDotsProps>;

export default ButtonPillDots;
export { ButtonPillDots };
