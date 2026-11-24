import type { DefineComponent } from 'vue';

export interface TextICircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextICircle: DefineComponent<TextICircleProps>;

export default TextICircle;
export { TextICircle };
