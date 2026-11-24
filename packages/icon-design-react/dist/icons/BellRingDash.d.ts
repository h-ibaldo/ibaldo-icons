import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingDash: ForwardRefExoticComponent<BellRingDashProps & RefAttributes<SVGSVGElement>>;

export default BellRingDash;
export { BellRingDash };
