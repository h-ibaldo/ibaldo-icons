import type { DefineComponent } from 'vue';

export interface BellRingKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingKnob: DefineComponent<BellRingKnobProps>;

export default BellRingKnob;
export { BellRingKnob };
