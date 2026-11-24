import type { DefineComponent } from 'vue';

export interface BellXCircleKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXCircleKnob: DefineComponent<BellXCircleKnobProps>;

export default BellXCircleKnob;
export { BellXCircleKnob };
