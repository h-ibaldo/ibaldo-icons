import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwise: ForwardRefExoticComponent<ArrowClockwiseProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwise;
export { ArrowClockwise };
