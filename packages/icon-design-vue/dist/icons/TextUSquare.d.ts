import type { DefineComponent } from 'vue';

export interface TextUSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextUSquare: DefineComponent<TextUSquareProps>;

export default TextUSquare;
export { TextUSquare };
