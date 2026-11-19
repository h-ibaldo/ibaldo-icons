import type { DefineComponent } from 'vue';

export interface StopwatchMinusTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchMinusTick: DefineComponent<StopwatchMinusTickProps>;

export default StopwatchMinusTick;
export { StopwatchMinusTick };
