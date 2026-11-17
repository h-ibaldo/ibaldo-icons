import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellTiltedKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellTiltedKnob: ForwardRefExoticComponent<BellTiltedKnobProps & RefAttributes<SVGSVGElement>>;

export default BellTiltedKnob;
export { BellTiltedKnob };
