import type { DefineComponent } from 'vue';

export interface StopwatchPinBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPinBare: DefineComponent<StopwatchPinBareProps>;

export default StopwatchPinBare;
export { StopwatchPinBare };
