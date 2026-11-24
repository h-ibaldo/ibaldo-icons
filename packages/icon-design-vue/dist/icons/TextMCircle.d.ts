import type { DefineComponent } from 'vue';

export interface TextMCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextMCircle: DefineComponent<TextMCircleProps>;

export default TextMCircle;
export { TextMCircle };
