import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDashedQuarterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDashedQuarter: ForwardRefExoticComponent<ClockDashedQuarterProps & RefAttributes<SVGSVGElement>>;

export default ClockDashedQuarter;
export { ClockDashedQuarter };
