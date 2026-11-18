import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockClockwiseBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockClockwiseBottom: ForwardRefExoticComponent<ClockClockwiseBottomProps & RefAttributes<SVGSVGElement>>;

export default ClockClockwiseBottom;
export { ClockClockwiseBottom };
