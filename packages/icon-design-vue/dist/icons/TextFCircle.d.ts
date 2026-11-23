import type { DefineComponent } from 'vue';

export interface TextFCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextFCircle: DefineComponent<TextFCircleProps>;

export default TextFCircle;
export { TextFCircle };
