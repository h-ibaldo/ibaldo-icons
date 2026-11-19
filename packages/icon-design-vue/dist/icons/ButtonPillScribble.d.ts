import type { DefineComponent } from 'vue';

export interface ButtonPillScribbleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ButtonPillScribble: DefineComponent<ButtonPillScribbleProps>;

export default ButtonPillScribble;
export { ButtonPillScribble };
