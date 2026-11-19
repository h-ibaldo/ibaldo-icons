import type { DefineComponent } from 'vue';

export interface ArrowClockwiseSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseSquare: DefineComponent<ArrowClockwiseSquareProps>;

export default ArrowClockwiseSquare;
export { ArrowClockwiseSquare };
