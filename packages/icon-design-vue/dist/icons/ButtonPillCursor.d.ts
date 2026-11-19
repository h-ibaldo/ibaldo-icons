import type { DefineComponent } from 'vue';

export interface ButtonPillCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonPillCursor: DefineComponent<ButtonPillCursorProps>;

export default ButtonPillCursor;
export { ButtonPillCursor };
