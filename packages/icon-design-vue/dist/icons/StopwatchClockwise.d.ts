import type { DefineComponent } from 'vue';

export interface StopwatchClockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwise: DefineComponent<StopwatchClockwiseProps>;

export default StopwatchClockwise;
export { StopwatchClockwise };
