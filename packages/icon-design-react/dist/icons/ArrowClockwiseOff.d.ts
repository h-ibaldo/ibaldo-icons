import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseOff: ForwardRefExoticComponent<ArrowClockwiseOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseOff;
export { ArrowClockwiseOff };
