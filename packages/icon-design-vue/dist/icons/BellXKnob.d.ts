import type { DefineComponent } from 'vue';

export interface BellXKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXKnob: DefineComponent<BellXKnobProps>;

export default BellXKnob;
export { BellXKnob };
