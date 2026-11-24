import type { DefineComponent } from 'vue';

export interface ButtonCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonCursor: DefineComponent<ButtonCursorProps>;

export default ButtonCursor;
export { ButtonCursor };
