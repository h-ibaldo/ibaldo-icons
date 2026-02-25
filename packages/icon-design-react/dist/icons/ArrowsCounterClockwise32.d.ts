import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsCounterClockwise32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsCounterClockwise32: ForwardRefExoticComponent<ArrowsCounterClockwise32Props & RefAttributes<SVGSVGElement>>;

export default ArrowsCounterClockwise32;
export { ArrowsCounterClockwise32 };
