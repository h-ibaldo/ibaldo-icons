import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsClockwise3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsClockwise3: ForwardRefExoticComponent<ArrowsClockwise3Props & RefAttributes<SVGSVGElement>>;

export default ArrowsClockwise3;
export { ArrowsClockwise3 };
