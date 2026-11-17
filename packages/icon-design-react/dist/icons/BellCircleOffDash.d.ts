import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCircleOffDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCircleOffDash: ForwardRefExoticComponent<BellCircleOffDashProps & RefAttributes<SVGSVGElement>>;

export default BellCircleOffDash;
export { BellCircleOffDash };
