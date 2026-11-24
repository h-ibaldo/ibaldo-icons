import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseCircle: ForwardRefExoticComponent<ArrowCounterclockwiseCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseCircle;
export { ArrowCounterclockwiseCircle };
