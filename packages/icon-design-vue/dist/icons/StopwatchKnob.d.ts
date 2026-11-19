import type { DefineComponent } from 'vue';

export interface StopwatchKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchKnob: DefineComponent<StopwatchKnobProps>;

export default StopwatchKnob;
export { StopwatchKnob };
