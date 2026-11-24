import type { DefineComponent } from 'vue';

export interface StopwatchOffKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchOffKnob: DefineComponent<StopwatchOffKnobProps>;

export default StopwatchOffKnob;
export { StopwatchOffKnob };
