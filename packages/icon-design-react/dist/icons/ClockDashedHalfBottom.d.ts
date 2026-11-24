import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDashedHalfBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDashedHalfBottom: ForwardRefExoticComponent<ClockDashedHalfBottomProps & RefAttributes<SVGSVGElement>>;

export default ClockDashedHalfBottom;
export { ClockDashedHalfBottom };
