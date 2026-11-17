import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseOff: ForwardRefExoticComponent<ArrowCounterclockwiseOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseOff;
export { ArrowCounterclockwiseOff };
