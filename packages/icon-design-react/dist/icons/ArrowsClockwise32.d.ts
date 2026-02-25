import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsClockwise32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsClockwise32: ForwardRefExoticComponent<ArrowsClockwise32Props & RefAttributes<SVGSVGElement>>;

export default ArrowsClockwise32;
export { ArrowsClockwise32 };
