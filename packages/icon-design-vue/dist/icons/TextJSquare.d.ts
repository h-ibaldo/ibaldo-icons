import type { DefineComponent } from 'vue';

export interface TextJSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextJSquare: DefineComponent<TextJSquareProps>;

export default TextJSquare;
export { TextJSquare };
