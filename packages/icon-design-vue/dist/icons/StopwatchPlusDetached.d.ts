import type { DefineComponent } from 'vue';

export interface StopwatchPlusDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPlusDetached: DefineComponent<StopwatchPlusDetachedProps>;

export default StopwatchPlusDetached;
export { StopwatchPlusDetached };
