import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraKnob: ForwardRefExoticComponent<CameraKnobProps & RefAttributes<SVGSVGElement>>;

export default CameraKnob;
export { CameraKnob };
