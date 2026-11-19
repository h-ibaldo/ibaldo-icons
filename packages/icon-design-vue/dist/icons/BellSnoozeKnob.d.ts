import type { DefineComponent } from 'vue';

export interface BellSnoozeKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSnoozeKnob: DefineComponent<BellSnoozeKnobProps>;

export default BellSnoozeKnob;
export { BellSnoozeKnob };
