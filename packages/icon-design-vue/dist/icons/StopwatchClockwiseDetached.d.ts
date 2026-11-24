import type { DefineComponent } from 'vue';

export interface StopwatchClockwiseDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwiseDetached: DefineComponent<StopwatchClockwiseDetachedProps>;

export default StopwatchClockwiseDetached;
export { StopwatchClockwiseDetached };
