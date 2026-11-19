import type { DefineComponent } from 'vue';

export interface StopwatchDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchDots: DefineComponent<StopwatchDotsProps>;

export default StopwatchDots;
export { StopwatchDots };
