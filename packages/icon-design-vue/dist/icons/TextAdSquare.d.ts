import type { DefineComponent } from 'vue';

export interface TextAdSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAdSquare: DefineComponent<TextAdSquareProps>;

export default TextAdSquare;
export { TextAdSquare };
