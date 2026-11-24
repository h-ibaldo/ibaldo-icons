import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCounterclockwiseDottedChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCounterclockwiseDottedChevron: ForwardRefExoticComponent<ArrowCounterclockwiseDottedChevronProps & RefAttributes<SVGSVGElement>>;

export default ArrowCounterclockwiseDottedChevron;
export { ArrowCounterclockwiseDottedChevron };
