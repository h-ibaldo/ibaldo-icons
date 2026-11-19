import type { DefineComponent } from 'vue';

export interface BellKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellKnob: DefineComponent<BellKnobProps>;

export default BellKnob;
export { BellKnob };
