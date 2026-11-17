import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSnoozeKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSnoozeKnob: ForwardRefExoticComponent<BellSnoozeKnobProps & RefAttributes<SVGSVGElement>>;

export default BellSnoozeKnob;
export { BellSnoozeKnob };
