import type { DefineComponent } from 'vue';

export interface StopwatchClockwiseBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwiseBare: DefineComponent<StopwatchClockwiseBareProps>;

export default StopwatchClockwiseBare;
export { StopwatchClockwiseBare };
