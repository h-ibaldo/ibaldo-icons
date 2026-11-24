import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDottedArcClockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDottedArcClockwise: ForwardRefExoticComponent<ClockDottedArcClockwiseProps & RefAttributes<SVGSVGElement>>;

export default ClockDottedArcClockwise;
export { ClockDottedArcClockwise };
