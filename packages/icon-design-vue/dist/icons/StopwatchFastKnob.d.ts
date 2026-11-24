import type { DefineComponent } from 'vue';

export interface StopwatchFastKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchFastKnob: DefineComponent<StopwatchFastKnobProps>;

export default StopwatchFastKnob;
export { StopwatchFastKnob };
