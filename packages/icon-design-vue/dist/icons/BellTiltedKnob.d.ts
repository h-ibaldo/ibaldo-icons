import type { DefineComponent } from 'vue';

export interface BellTiltedKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellTiltedKnob: DefineComponent<BellTiltedKnobProps>;

export default BellTiltedKnob;
export { BellTiltedKnob };
