import type { DefineComponent } from 'vue';

export interface TextISquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextISquare: DefineComponent<TextISquareProps>;

export default TextISquare;
export { TextISquare };
