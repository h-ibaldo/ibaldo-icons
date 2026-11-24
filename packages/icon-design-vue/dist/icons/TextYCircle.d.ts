import type { DefineComponent } from 'vue';

export interface TextYCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextYCircle: DefineComponent<TextYCircleProps>;

export default TextYCircle;
export { TextYCircle };
