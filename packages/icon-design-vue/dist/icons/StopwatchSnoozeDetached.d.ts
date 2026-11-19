import type { DefineComponent } from 'vue';

export interface StopwatchSnoozeDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchSnoozeDetached: DefineComponent<StopwatchSnoozeDetachedProps>;

export default StopwatchSnoozeDetached;
export { StopwatchSnoozeDetached };
