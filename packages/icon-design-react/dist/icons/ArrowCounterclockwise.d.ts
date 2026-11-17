import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwise: ForwardRefExoticComponent<ArrowCounterclockwiseProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwise;
export { ArrowCounterclockwise };
