import type { DefineComponent } from 'vue';

export interface ArrowClockwiseCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseCheck: DefineComponent<ArrowClockwiseCheckProps>;

export default ArrowClockwiseCheck;
export { ArrowClockwiseCheck };
