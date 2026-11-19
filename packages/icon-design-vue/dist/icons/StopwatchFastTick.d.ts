import type { DefineComponent } from 'vue';

export interface StopwatchFastTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchFastTick: DefineComponent<StopwatchFastTickProps>;

export default StopwatchFastTick;
export { StopwatchFastTick };
