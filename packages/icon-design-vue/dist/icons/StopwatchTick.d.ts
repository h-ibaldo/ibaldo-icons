import type { DefineComponent } from 'vue';

export interface StopwatchTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchTick: DefineComponent<StopwatchTickProps>;

export default StopwatchTick;
export { StopwatchTick };
