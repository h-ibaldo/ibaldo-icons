import type { DefineComponent } from 'vue';

export interface TextHCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextHCircle: DefineComponent<TextHCircleProps>;

export default TextHCircle;
export { TextHCircle };
