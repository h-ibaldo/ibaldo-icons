import type { DefineComponent } from 'vue';

export interface TextDSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextDSquare: DefineComponent<TextDSquareProps>;

export default TextDSquare;
export { TextDSquare };
