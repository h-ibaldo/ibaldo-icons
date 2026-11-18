import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockCounterclockwiseBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockCounterclockwiseBottom: ForwardRefExoticComponent<ClockCounterclockwiseBottomProps & RefAttributes<SVGSVGElement>>;

export default ClockCounterclockwiseBottom;
export { ClockCounterclockwiseBottom };
