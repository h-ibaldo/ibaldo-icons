import type { DefineComponent } from 'vue';

export interface StopwatchCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchCheck: DefineComponent<StopwatchCheckProps>;

export default StopwatchCheck;
export { StopwatchCheck };
