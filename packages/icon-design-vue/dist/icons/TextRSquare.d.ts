import type { DefineComponent } from 'vue';

export interface TextRSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextRSquare: DefineComponent<TextRSquareProps>;

export default TextRSquare;
export { TextRSquare };
