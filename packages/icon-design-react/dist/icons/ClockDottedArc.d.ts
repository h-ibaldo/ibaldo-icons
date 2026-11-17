import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDottedArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDottedArc: ForwardRefExoticComponent<ClockDottedArcProps & RefAttributes<SVGSVGElement>>;

export default ClockDottedArc;
export { ClockDottedArc };
