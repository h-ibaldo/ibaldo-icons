import type { DefineComponent } from 'vue';

export interface ButtonDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonDots: DefineComponent<ButtonDotsProps>;

export default ButtonDots;
export { ButtonDots };
