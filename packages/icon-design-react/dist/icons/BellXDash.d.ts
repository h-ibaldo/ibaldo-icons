import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXDash: ForwardRefExoticComponent<BellXDashProps & RefAttributes<SVGSVGElement>>;

export default BellXDash;
export { BellXDash };
