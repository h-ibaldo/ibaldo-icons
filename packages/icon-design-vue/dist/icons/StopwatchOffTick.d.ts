import type { DefineComponent } from 'vue';

export interface StopwatchOffTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchOffTick: DefineComponent<StopwatchOffTickProps>;

export default StopwatchOffTick;
export { StopwatchOffTick };
