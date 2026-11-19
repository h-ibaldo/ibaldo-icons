import type { DefineComponent } from 'vue';

export interface BellAlertKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellAlertKnob: DefineComponent<BellAlertKnobProps>;

export default BellAlertKnob;
export { BellAlertKnob };
