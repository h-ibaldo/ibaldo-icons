import type { DefineComponent } from 'vue';

export interface TextESquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextESquare: DefineComponent<TextESquareProps>;

export default TextESquare;
export { TextESquare };
