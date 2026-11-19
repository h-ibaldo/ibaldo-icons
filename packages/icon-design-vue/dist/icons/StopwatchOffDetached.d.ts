import type { DefineComponent } from 'vue';

export interface StopwatchOffDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchOffDetached: DefineComponent<StopwatchOffDetachedProps>;

export default StopwatchOffDetached;
export { StopwatchOffDetached };
