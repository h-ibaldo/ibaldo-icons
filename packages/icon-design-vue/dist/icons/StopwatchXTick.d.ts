import type { DefineComponent } from 'vue';

export interface StopwatchXTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchXTick: DefineComponent<StopwatchXTickProps>;

export default StopwatchXTick;
export { StopwatchXTick };
