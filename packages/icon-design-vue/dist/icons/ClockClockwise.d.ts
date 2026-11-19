import type { DefineComponent } from 'vue';

export interface ClockClockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockClockwise: DefineComponent<ClockClockwiseProps>;

export default ClockClockwise;
export { ClockClockwise };
