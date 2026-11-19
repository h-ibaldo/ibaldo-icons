import type { DefineComponent } from 'vue';

export interface StopwatchPieDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPieDetached: DefineComponent<StopwatchPieDetachedProps>;

export default StopwatchPieDetached;
export { StopwatchPieDetached };
