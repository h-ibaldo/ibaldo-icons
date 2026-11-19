import type { DefineComponent } from 'vue';

export interface StopwatchAlertTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchAlertTick: DefineComponent<StopwatchAlertTickProps>;

export default StopwatchAlertTick;
export { StopwatchAlertTick };
