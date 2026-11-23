import type { DefineComponent } from 'vue';

export interface TextVSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextVSquare: DefineComponent<TextVSquareProps>;

export default TextVSquare;
export { TextVSquare };
