import type { DefineComponent } from 'vue';

export interface BellCheckCircleKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleKnob: DefineComponent<BellCheckCircleKnobProps>;

export default BellCheckCircleKnob;
export { BellCheckCircleKnob };
