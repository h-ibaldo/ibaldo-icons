import type { DefineComponent } from 'vue';

export interface TextGSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextGSquare: DefineComponent<TextGSquareProps>;

export default TextGSquare;
export { TextGSquare };
