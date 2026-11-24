import type { DefineComponent } from 'vue';

export interface StopwatchDottedBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchDottedBare: DefineComponent<StopwatchDottedBareProps>;

export default StopwatchDottedBare;
export { StopwatchDottedBare };
