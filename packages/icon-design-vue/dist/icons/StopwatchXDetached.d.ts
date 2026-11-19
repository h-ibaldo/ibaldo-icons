import type { DefineComponent } from 'vue';

export interface StopwatchXDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchXDetached: DefineComponent<StopwatchXDetachedProps>;

export default StopwatchXDetached;
export { StopwatchXDetached };
