import type { DefineComponent } from 'vue';

export interface StopwatchAlertKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchAlertKnob: DefineComponent<StopwatchAlertKnobProps>;

export default StopwatchAlertKnob;
export { StopwatchAlertKnob };
