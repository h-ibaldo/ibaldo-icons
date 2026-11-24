import type { DefineComponent } from 'vue';

export interface TextYSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextYSquare: DefineComponent<TextYSquareProps>;

export default TextYSquare;
export { TextYSquare };
