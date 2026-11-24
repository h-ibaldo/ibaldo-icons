import type { DefineComponent } from 'vue';

export interface StopwatchDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchDotted: DefineComponent<StopwatchDottedProps>;

export default StopwatchDotted;
export { StopwatchDotted };
