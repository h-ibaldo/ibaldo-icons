import type { DefineComponent } from 'vue';

export interface TextHSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextHSquare: DefineComponent<TextHSquareProps>;

export default TextHSquare;
export { TextHSquare };
