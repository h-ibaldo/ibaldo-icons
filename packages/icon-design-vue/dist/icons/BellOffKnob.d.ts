import type { DefineComponent } from 'vue';

export interface BellOffKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOffKnob: DefineComponent<BellOffKnobProps>;

export default BellOffKnob;
export { BellOffKnob };
