import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseFiveChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseFiveChevron: ForwardRefExoticComponent<ArrowClockwiseFiveChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseFiveChevron;
export { ArrowClockwiseFiveChevron };
