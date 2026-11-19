import type { DefineComponent } from 'vue';

export interface ArrowClockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowClockwise: DefineComponent<ArrowClockwiseProps>;

export default ArrowClockwise;
export { ArrowClockwise };
