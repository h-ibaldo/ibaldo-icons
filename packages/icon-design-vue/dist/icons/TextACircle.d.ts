import type { DefineComponent } from 'vue';

export interface TextACircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextACircle: DefineComponent<TextACircleProps>;

export default TextACircle;
export { TextACircle };
