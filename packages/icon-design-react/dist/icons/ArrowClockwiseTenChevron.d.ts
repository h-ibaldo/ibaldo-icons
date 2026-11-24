import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseTenChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseTenChevron: ForwardRefExoticComponent<ArrowClockwiseTenChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseTenChevron;
export { ArrowClockwiseTenChevron };
