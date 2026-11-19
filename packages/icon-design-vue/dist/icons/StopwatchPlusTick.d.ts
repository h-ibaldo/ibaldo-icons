import type { DefineComponent } from 'vue';

export interface StopwatchPlusTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPlusTick: DefineComponent<StopwatchPlusTickProps>;

export default StopwatchPlusTick;
export { StopwatchPlusTick };
