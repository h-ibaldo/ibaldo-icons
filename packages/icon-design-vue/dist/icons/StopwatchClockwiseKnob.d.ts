import type { DefineComponent } from 'vue';

export interface StopwatchClockwiseKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchClockwiseKnob: DefineComponent<StopwatchClockwiseKnobProps>;

export default StopwatchClockwiseKnob;
export { StopwatchClockwiseKnob };
