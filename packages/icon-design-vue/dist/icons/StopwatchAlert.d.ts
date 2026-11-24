import type { DefineComponent } from 'vue';

export interface StopwatchAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchAlert: DefineComponent<StopwatchAlertProps>;

export default StopwatchAlert;
export { StopwatchAlert };
