import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseCheck: ForwardRefExoticComponent<ArrowClockwiseCheckProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseCheck;
export { ArrowClockwiseCheck };
