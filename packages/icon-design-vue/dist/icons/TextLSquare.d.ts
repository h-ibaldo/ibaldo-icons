import type { DefineComponent } from 'vue';

export interface TextLSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextLSquare: DefineComponent<TextLSquareProps>;

export default TextLSquare;
export { TextLSquare };
