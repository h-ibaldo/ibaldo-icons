import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsClockwise1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsClockwise1: ForwardRefExoticComponent<ArrowsClockwise1Props & RefAttributes<SVGSVGElement>>;

export default ArrowsClockwise1;
export { ArrowsClockwise1 };
