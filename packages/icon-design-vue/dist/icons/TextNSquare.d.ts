import type { DefineComponent } from 'vue';

export interface TextNSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextNSquare: DefineComponent<TextNSquareProps>;

export default TextNSquare;
export { TextNSquare };
