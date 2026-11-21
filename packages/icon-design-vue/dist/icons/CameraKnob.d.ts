import type { DefineComponent } from 'vue';

export interface CameraKnobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraKnob: DefineComponent<CameraKnobProps>;

export default CameraKnob;
export { CameraKnob };
