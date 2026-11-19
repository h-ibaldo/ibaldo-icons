import type { DefineComponent } from 'vue';

export interface ButtonScribbleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonScribble: DefineComponent<ButtonScribbleProps>;

export default ButtonScribble;
export { ButtonScribble };
