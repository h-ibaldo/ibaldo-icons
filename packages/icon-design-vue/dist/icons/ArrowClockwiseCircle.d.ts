import type { DefineComponent } from 'vue';

export interface ArrowClockwiseCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseCircle: DefineComponent<ArrowClockwiseCircleProps>;

export default ArrowClockwiseCircle;
export { ArrowClockwiseCircle };
