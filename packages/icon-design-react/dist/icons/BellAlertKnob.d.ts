import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellAlertKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellAlertKnob: ForwardRefExoticComponent<BellAlertKnobProps & RefAttributes<SVGSVGElement>>;

export default BellAlertKnob;
export { BellAlertKnob };
