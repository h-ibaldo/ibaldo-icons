import type { DefineComponent } from 'vue';

export interface StopwatchDottedDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchDottedDetached: DefineComponent<StopwatchDottedDetachedProps>;

export default StopwatchDottedDetached;
export { StopwatchDottedDetached };
