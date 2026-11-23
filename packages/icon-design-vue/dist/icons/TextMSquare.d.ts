import type { DefineComponent } from 'vue';

export interface TextMSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextMSquare: DefineComponent<TextMSquareProps>;

export default TextMSquare;
export { TextMSquare };
