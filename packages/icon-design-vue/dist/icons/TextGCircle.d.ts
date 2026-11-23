import type { DefineComponent } from 'vue';

export interface TextGCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextGCircle: DefineComponent<TextGCircleProps>;

export default TextGCircle;
export { TextGCircle };
