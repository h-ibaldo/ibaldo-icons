import type { DefineComponent } from 'vue';

export interface StopwatchPinKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchPinKnob: DefineComponent<StopwatchPinKnobProps>;

export default StopwatchPinKnob;
export { StopwatchPinKnob };
