import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsClockwise12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsClockwise12: ForwardRefExoticComponent<ArrowsClockwise12Props & RefAttributes<SVGSVGElement>>;

export default ArrowsClockwise12;
export { ArrowsClockwise12 };
