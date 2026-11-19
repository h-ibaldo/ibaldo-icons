import type { DefineComponent } from 'vue';

export interface TextAppCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAppCircle: DefineComponent<TextAppCircleProps>;

export default TextAppCircle;
export { TextAppCircle };
