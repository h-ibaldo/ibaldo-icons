import type { DefineComponent } from 'vue';

export interface StopwatchDottedTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchDottedTick: DefineComponent<StopwatchDottedTickProps>;

export default StopwatchDottedTick;
export { StopwatchDottedTick };
