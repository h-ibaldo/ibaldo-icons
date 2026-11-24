import type { DefineComponent } from 'vue';

export interface TextZSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextZSquare: DefineComponent<TextZSquareProps>;

export default TextZSquare;
export { TextZSquare };
