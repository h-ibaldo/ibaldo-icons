import type { DefineComponent } from 'vue';

export interface TextFSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextFSquare: DefineComponent<TextFSquareProps>;

export default TextFSquare;
export { TextFSquare };
