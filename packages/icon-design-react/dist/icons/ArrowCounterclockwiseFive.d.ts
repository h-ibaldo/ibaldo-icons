import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseFiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseFive: ForwardRefExoticComponent<ArrowCounterclockwiseFiveProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseFive;
export { ArrowCounterclockwiseFive };
