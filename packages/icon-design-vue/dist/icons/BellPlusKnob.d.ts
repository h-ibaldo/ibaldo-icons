import type { DefineComponent } from 'vue';

export interface BellPlusKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellPlusKnob: DefineComponent<BellPlusKnobProps>;

export default BellPlusKnob;
export { BellPlusKnob };
