import type { DefineComponent } from 'vue';

export interface StopwatchMinusDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchMinusDetached: DefineComponent<StopwatchMinusDetachedProps>;

export default StopwatchMinusDetached;
export { StopwatchMinusDetached };
