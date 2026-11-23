import type { DefineComponent } from 'vue';

export interface TextKSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextKSquare: DefineComponent<TextKSquareProps>;

export default TextKSquare;
export { TextKSquare };
