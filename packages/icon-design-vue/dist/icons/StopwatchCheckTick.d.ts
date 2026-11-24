import type { DefineComponent } from 'vue';

export interface StopwatchCheckTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchCheckTick: DefineComponent<StopwatchCheckTickProps>;

export default StopwatchCheckTick;
export { StopwatchCheckTick };
