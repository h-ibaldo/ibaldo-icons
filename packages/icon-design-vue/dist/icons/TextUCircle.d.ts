import type { DefineComponent } from 'vue';

export interface TextUCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextUCircle: DefineComponent<TextUCircleProps>;

export default TextUCircle;
export { TextUCircle };
