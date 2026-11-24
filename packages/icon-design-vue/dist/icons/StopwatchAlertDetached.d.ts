import type { DefineComponent } from 'vue';

export interface StopwatchAlertDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchAlertDetached: DefineComponent<StopwatchAlertDetachedProps>;

export default StopwatchAlertDetached;
export { StopwatchAlertDetached };
