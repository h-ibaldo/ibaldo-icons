import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellAlertDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellAlertDash: ForwardRefExoticComponent<BellAlertDashProps & RefAttributes<SVGSVGElement>>;

export default BellAlertDash;
export { BellAlertDash };
