import type { DefineComponent } from 'vue';

export interface TextBoldSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextBoldSquare: DefineComponent<TextBoldSquareProps>;

export default TextBoldSquare;
export { TextBoldSquare };
