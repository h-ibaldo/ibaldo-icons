import type { DefineComponent } from 'vue';

export interface StopwatchBoltKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopwatchBoltKnob: DefineComponent<StopwatchBoltKnobProps>;

export default StopwatchBoltKnob;
export { StopwatchBoltKnob };
