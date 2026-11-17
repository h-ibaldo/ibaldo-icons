import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellPlusKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellPlusKnob: ForwardRefExoticComponent<BellPlusKnobProps & RefAttributes<SVGSVGElement>>;

export default BellPlusKnob;
export { BellPlusKnob };
