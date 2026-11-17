import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellClockDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellClockDash: ForwardRefExoticComponent<BellClockDashProps & RefAttributes<SVGSVGElement>>;

export default BellClockDash;
export { BellClockDash };
