import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellClockKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellClockKnob: ForwardRefExoticComponent<BellClockKnobProps & RefAttributes<SVGSVGElement>>;

export default BellClockKnob;
export { BellClockKnob };
