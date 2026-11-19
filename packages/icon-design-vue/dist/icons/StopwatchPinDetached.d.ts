import type { DefineComponent } from 'vue';

export interface StopwatchPinDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPinDetached: DefineComponent<StopwatchPinDetachedProps>;

export default StopwatchPinDetached;
export { StopwatchPinDetached };
