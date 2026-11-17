import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingLinesKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingLinesKnob: ForwardRefExoticComponent<BellRingLinesKnobProps & RefAttributes<SVGSVGElement>>;

export default BellRingLinesKnob;
export { BellRingLinesKnob };
