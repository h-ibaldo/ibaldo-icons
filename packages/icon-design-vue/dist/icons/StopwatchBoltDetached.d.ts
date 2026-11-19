import type { DefineComponent } from 'vue';

export interface StopwatchBoltDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchBoltDetached: DefineComponent<StopwatchBoltDetachedProps>;

export default StopwatchBoltDetached;
export { StopwatchBoltDetached };
