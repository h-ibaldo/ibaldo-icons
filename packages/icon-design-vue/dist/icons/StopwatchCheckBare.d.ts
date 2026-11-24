import type { DefineComponent } from 'vue';

export interface StopwatchCheckBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchCheckBare: DefineComponent<StopwatchCheckBareProps>;

export default StopwatchCheckBare;
export { StopwatchCheckBare };
