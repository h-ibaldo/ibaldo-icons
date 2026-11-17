import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingRimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingRim: ForwardRefExoticComponent<BellRingRimProps & RefAttributes<SVGSVGElement>>;

export default BellRingRim;
export { BellRingRim };
