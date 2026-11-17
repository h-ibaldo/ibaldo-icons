import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDashedHalfLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDashedHalfLong: ForwardRefExoticComponent<ClockDashedHalfLongProps & RefAttributes<SVGSVGElement>>;

export default ClockDashedHalfLong;
export { ClockDashedHalfLong };
