import type { DefineComponent } from 'vue';

export interface ClockCounterclockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockCounterclockwise: DefineComponent<ClockCounterclockwiseProps>;

export default ClockCounterclockwise;
export { ClockCounterclockwise };
