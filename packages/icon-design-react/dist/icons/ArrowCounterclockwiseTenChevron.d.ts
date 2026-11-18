import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseTenChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseTenChevron: ForwardRefExoticComponent<ArrowCounterclockwiseTenChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseTenChevron;
export { ArrowCounterclockwiseTenChevron };
