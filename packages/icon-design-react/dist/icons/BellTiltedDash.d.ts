import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellTiltedDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellTiltedDash: ForwardRefExoticComponent<BellTiltedDashProps & RefAttributes<SVGSVGElement>>;

export default BellTiltedDash;
export { BellTiltedDash };
