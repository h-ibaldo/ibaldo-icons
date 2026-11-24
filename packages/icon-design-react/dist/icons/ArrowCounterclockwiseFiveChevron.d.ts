import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseFiveChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseFiveChevron: ForwardRefExoticComponent<ArrowCounterclockwiseFiveChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseFiveChevron;
export { ArrowCounterclockwiseFiveChevron };
