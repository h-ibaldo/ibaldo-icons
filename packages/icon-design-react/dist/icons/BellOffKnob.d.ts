import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOffKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOffKnob: ForwardRefExoticComponent<BellOffKnobProps & RefAttributes<SVGSVGElement>>;

export default BellOffKnob;
export { BellOffKnob };
