import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseFiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseFive: ForwardRefExoticComponent<ArrowClockwiseFiveProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseFive;
export { ArrowClockwiseFive };
