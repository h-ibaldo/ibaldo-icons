import type { DefineComponent } from 'vue';

export interface StopwatchPieKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPieKnob: DefineComponent<StopwatchPieKnobProps>;

export default StopwatchPieKnob;
export { StopwatchPieKnob };
