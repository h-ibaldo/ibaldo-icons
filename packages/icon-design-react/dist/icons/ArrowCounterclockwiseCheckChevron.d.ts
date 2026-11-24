import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseCheckChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseCheckChevron: ForwardRefExoticComponent<ArrowCounterclockwiseCheckChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseCheckChevron;
export { ArrowCounterclockwiseCheckChevron };
