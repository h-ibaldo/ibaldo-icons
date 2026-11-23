import type { DefineComponent } from 'vue';

export interface TextPSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextPSquare: DefineComponent<TextPSquareProps>;

export default TextPSquare;
export { TextPSquare };
