import type { DefineComponent } from 'vue';

export interface BellDotKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellDotKnob: DefineComponent<BellDotKnobProps>;

export default BellDotKnob;
export { BellDotKnob };
