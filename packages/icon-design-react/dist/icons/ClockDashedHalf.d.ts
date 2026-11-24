import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDashedHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDashedHalf: ForwardRefExoticComponent<ClockDashedHalfProps & RefAttributes<SVGSVGElement>>;

export default ClockDashedHalf;
export { ClockDashedHalf };
