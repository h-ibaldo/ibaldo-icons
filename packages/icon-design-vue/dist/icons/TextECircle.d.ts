import type { DefineComponent } from 'vue';

export interface TextECircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextECircle: DefineComponent<TextECircleProps>;

export default TextECircle;
export { TextECircle };
