import type { DefineComponent } from 'vue';

export interface StopwatchSnoozeBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchSnoozeBare: DefineComponent<StopwatchSnoozeBareProps>;

export default StopwatchSnoozeBare;
export { StopwatchSnoozeBare };
