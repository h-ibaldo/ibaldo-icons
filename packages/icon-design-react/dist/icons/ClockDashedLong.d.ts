import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDashedLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDashedLong: ForwardRefExoticComponent<ClockDashedLongProps & RefAttributes<SVGSVGElement>>;

export default ClockDashedLong;
export { ClockDashedLong };
