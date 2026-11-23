import type { DefineComponent } from 'vue';

export interface TextSSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextSSquare: DefineComponent<TextSSquareProps>;

export default TextSSquare;
export { TextSSquare };
