import type { DefineComponent } from 'vue';

export interface ButtonPillBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonPillBar: DefineComponent<ButtonPillBarProps>;

export default ButtonPillBar;
export { ButtonPillBar };
