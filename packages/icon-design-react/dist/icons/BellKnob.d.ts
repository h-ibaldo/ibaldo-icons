import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellKnob: ForwardRefExoticComponent<BellKnobProps & RefAttributes<SVGSVGElement>>;

export default BellKnob;
export { BellKnob };
