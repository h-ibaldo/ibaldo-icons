import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseChevron: ForwardRefExoticComponent<ArrowCounterclockwiseChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseChevron;
export { ArrowCounterclockwiseChevron };
