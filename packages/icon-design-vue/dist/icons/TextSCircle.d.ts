import type { DefineComponent } from 'vue';

export interface TextSCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextSCircle: DefineComponent<TextSCircleProps>;

export default TextSCircle;
export { TextSCircle };
