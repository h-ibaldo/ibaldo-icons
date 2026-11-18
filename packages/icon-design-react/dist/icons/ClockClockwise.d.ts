import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockClockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockClockwise: ForwardRefExoticComponent<ClockClockwiseProps & RefAttributes<SVGSVGElement>>;

export default ClockClockwise;
export { ClockClockwise };
