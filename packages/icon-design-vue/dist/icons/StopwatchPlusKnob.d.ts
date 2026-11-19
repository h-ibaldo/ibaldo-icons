import type { DefineComponent } from 'vue';

export interface StopwatchPlusKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPlusKnob: DefineComponent<StopwatchPlusKnobProps>;

export default StopwatchPlusKnob;
export { StopwatchPlusKnob };
