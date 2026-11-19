import type { DefineComponent } from 'vue';

export interface BellClockKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellClockKnob: DefineComponent<BellClockKnobProps>;

export default BellClockKnob;
export { BellClockKnob };
