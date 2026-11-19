import type { DefineComponent } from 'vue';

export interface StopwatchSnoozeKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchSnoozeKnob: DefineComponent<StopwatchSnoozeKnobProps>;

export default StopwatchSnoozeKnob;
export { StopwatchSnoozeKnob };
