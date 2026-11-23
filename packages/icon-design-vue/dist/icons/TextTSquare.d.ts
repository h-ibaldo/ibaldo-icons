import type { DefineComponent } from 'vue';

export interface TextTSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextTSquare: DefineComponent<TextTSquareProps>;

export default TextTSquare;
export { TextTSquare };
