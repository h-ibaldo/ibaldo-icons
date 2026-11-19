import type { DefineComponent } from 'vue';

export interface BellRingLinesKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingLinesKnob: DefineComponent<BellRingLinesKnobProps>;

export default BellRingLinesKnob;
export { BellRingLinesKnob };
