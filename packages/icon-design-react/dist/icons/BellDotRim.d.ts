import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellDotRimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellDotRim: ForwardRefExoticComponent<BellDotRimProps & RefAttributes<SVGSVGElement>>;

export default BellDotRim;
export { BellDotRim };
