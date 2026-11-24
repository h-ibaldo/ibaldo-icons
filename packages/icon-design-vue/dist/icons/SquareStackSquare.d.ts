import type { DefineComponent } from 'vue';

export interface SquareStackSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackSquare: DefineComponent<SquareStackSquareProps>;

export default SquareStackSquare;
export { SquareStackSquare };
