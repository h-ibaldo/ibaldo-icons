import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellDotKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellDotKnob: ForwardRefExoticComponent<BellDotKnobProps & RefAttributes<SVGSVGElement>>;

export default BellDotKnob;
export { BellDotKnob };
