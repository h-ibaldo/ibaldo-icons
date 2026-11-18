import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDashedQuarterRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDashedQuarterRight: ForwardRefExoticComponent<ClockDashedQuarterRightProps & RefAttributes<SVGSVGElement>>;

export default ClockDashedQuarterRight;
export { ClockDashedQuarterRight };
