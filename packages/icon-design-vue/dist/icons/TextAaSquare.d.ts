import type { DefineComponent } from 'vue';

export interface TextAaSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAaSquare: DefineComponent<TextAaSquareProps>;

export default TextAaSquare;
export { TextAaSquare };
