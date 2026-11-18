import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockCounterclockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockCounterclockwise: ForwardRefExoticComponent<ClockCounterclockwiseProps & RefAttributes<SVGSVGElement>>;

export default ClockCounterclockwise;
export { ClockCounterclockwise };
