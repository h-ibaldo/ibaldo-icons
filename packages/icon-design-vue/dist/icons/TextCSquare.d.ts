import type { DefineComponent } from 'vue';

export interface TextCSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextCSquare: DefineComponent<TextCSquareProps>;

export default TextCSquare;
export { TextCSquare };
