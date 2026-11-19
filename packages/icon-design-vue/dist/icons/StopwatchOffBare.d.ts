import type { DefineComponent } from 'vue';

export interface StopwatchOffBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchOffBare: DefineComponent<StopwatchOffBareProps>;

export default StopwatchOffBare;
export { StopwatchOffBare };
