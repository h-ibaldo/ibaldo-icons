import type { DefineComponent } from 'vue';

export interface TextQSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextQSquare: DefineComponent<TextQSquareProps>;

export default TextQSquare;
export { TextQSquare };
