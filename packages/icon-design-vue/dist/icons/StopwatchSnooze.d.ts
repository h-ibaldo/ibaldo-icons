import type { DefineComponent } from 'vue';

export interface StopwatchSnoozeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchSnooze: DefineComponent<StopwatchSnoozeProps>;

export default StopwatchSnooze;
export { StopwatchSnooze };
