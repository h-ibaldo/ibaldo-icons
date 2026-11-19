import type { DefineComponent } from 'vue';

export interface TextASquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextASquare: DefineComponent<TextASquareProps>;

export default TextASquare;
export { TextASquare };
