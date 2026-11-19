import type { DefineComponent } from 'vue';

export interface StopwatchAlertBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchAlertBare: DefineComponent<StopwatchAlertBareProps>;

export default StopwatchAlertBare;
export { StopwatchAlertBare };
