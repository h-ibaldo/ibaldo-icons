import type { DefineComponent } from 'vue';

export interface StopwatchDottedKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchDottedKnob: DefineComponent<StopwatchDottedKnobProps>;

export default StopwatchDottedKnob;
export { StopwatchDottedKnob };
