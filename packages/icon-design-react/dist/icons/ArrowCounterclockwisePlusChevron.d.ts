import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwisePlusChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwisePlusChevron: ForwardRefExoticComponent<ArrowCounterclockwisePlusChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwisePlusChevron;
export { ArrowCounterclockwisePlusChevron };
