import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseBottomOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseBottomOff: ForwardRefExoticComponent<ArrowClockwiseBottomOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseBottomOff;
export { ArrowClockwiseBottomOff };
