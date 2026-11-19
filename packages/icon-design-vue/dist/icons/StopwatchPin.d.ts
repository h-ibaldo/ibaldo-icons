import type { DefineComponent } from 'vue';

export interface StopwatchPinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPin: DefineComponent<StopwatchPinProps>;

export default StopwatchPin;
export { StopwatchPin };
