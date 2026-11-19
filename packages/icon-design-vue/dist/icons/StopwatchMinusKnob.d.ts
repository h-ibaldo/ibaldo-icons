import type { DefineComponent } from 'vue';

export interface StopwatchMinusKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchMinusKnob: DefineComponent<StopwatchMinusKnobProps>;

export default StopwatchMinusKnob;
export { StopwatchMinusKnob };
