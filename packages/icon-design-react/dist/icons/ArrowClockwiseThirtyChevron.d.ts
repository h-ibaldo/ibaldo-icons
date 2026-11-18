import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseThirtyChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseThirtyChevron: ForwardRefExoticComponent<ArrowClockwiseThirtyChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseThirtyChevron;
export { ArrowClockwiseThirtyChevron };
