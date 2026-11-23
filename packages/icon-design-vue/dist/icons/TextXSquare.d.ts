import type { DefineComponent } from 'vue';

export interface TextXSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextXSquare: DefineComponent<TextXSquareProps>;

export default TextXSquare;
export { TextXSquare };
