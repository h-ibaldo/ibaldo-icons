import type { DefineComponent } from 'vue';

export interface StopwatchCheckDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchCheckDetached: DefineComponent<StopwatchCheckDetachedProps>;

export default StopwatchCheckDetached;
export { StopwatchCheckDetached };
