import type { DefineComponent } from 'vue';

export interface StopwatchPieTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPieTick: DefineComponent<StopwatchPieTickProps>;

export default StopwatchPieTick;
export { StopwatchPieTick };
