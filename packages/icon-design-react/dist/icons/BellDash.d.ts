import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellDash: ForwardRefExoticComponent<BellDashProps & RefAttributes<SVGSVGElement>>;

export default BellDash;
export { BellDash };
