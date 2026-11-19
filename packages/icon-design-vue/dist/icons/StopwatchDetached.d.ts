import type { DefineComponent } from 'vue';

export interface StopwatchDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchDetached: DefineComponent<StopwatchDetachedProps>;

export default StopwatchDetached;
export { StopwatchDetached };
