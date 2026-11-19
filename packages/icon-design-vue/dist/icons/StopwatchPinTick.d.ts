import type { DefineComponent } from 'vue';

export interface StopwatchPinTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPinTick: DefineComponent<StopwatchPinTickProps>;

export default StopwatchPinTick;
export { StopwatchPinTick };
