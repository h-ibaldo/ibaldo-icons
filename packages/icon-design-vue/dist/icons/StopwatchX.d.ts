import type { DefineComponent } from 'vue';

export interface StopwatchXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchX: DefineComponent<StopwatchXProps>;

export default StopwatchX;
export { StopwatchX };
