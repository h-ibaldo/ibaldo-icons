import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsCounterClockwise3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsCounterClockwise3: ForwardRefExoticComponent<ArrowsCounterClockwise3Props & RefAttributes<SVGSVGElement>>;

export default ArrowsCounterClockwise3;
export { ArrowsCounterClockwise3 };
