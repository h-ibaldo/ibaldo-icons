import type { DefineComponent } from 'vue';

export interface StopwatchPieBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPieBare: DefineComponent<StopwatchPieBareProps>;

export default StopwatchPieBare;
export { StopwatchPieBare };
