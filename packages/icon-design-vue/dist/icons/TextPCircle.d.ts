import type { DefineComponent } from 'vue';

export interface TextPCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextPCircle: DefineComponent<TextPCircleProps>;

export default TextPCircle;
export { TextPCircle };
