import type { DefineComponent } from 'vue';

export interface StopwatchBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchBare: DefineComponent<StopwatchBareProps>;

export default StopwatchBare;
export { StopwatchBare };
