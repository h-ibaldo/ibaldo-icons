import type { DefineComponent } from 'vue';

export interface TextBCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextBCircle: DefineComponent<TextBCircleProps>;

export default TextBCircle;
export { TextBCircle };
