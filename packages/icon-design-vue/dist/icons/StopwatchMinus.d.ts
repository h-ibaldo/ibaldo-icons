import type { DefineComponent } from 'vue';

export interface StopwatchMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchMinus: DefineComponent<StopwatchMinusProps>;

export default StopwatchMinus;
export { StopwatchMinus };
