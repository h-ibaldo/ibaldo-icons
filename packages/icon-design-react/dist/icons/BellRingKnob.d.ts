import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingKnob: ForwardRefExoticComponent<BellRingKnobProps & RefAttributes<SVGSVGElement>>;

export default BellRingKnob;
export { BellRingKnob };
