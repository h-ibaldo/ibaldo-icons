import type { DefineComponent } from 'vue';

export interface StopwatchCheckKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchCheckKnob: DefineComponent<StopwatchCheckKnobProps>;

export default StopwatchCheckKnob;
export { StopwatchCheckKnob };
