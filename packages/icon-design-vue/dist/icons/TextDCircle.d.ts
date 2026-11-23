import type { DefineComponent } from 'vue';

export interface TextDCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextDCircle: DefineComponent<TextDCircleProps>;

export default TextDCircle;
export { TextDCircle };
