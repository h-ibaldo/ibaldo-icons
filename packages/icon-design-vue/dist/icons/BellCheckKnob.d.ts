import type { DefineComponent } from 'vue';

export interface BellCheckKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckKnob: DefineComponent<BellCheckKnobProps>;

export default BellCheckKnob;
export { BellCheckKnob };
