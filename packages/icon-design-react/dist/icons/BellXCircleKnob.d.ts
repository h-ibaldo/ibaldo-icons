import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXCircleKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXCircleKnob: ForwardRefExoticComponent<BellXCircleKnobProps & RefAttributes<SVGSVGElement>>;

export default BellXCircleKnob;
export { BellXCircleKnob };
