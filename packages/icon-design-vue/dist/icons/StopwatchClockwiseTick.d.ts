import type { DefineComponent } from 'vue';

export interface StopwatchClockwiseTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwiseTick: DefineComponent<StopwatchClockwiseTickProps>;

export default StopwatchClockwiseTick;
export { StopwatchClockwiseTick };
