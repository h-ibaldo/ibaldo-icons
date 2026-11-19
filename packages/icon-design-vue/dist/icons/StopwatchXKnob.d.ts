import type { DefineComponent } from 'vue';

export interface StopwatchXKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchXKnob: DefineComponent<StopwatchXKnobProps>;

export default StopwatchXKnob;
export { StopwatchXKnob };
