import type { DefineComponent } from 'vue';

export interface StopwatchSnoozeTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchSnoozeTick: DefineComponent<StopwatchSnoozeTickProps>;

export default StopwatchSnoozeTick;
export { StopwatchSnoozeTick };
