import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelFilterDollarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelFilterDollar: ForwardRefExoticComponent<FunnelFilterDollarProps & RefAttributes<SVGSVGElement>>;

export default FunnelFilterDollar;
export { FunnelFilterDollar };
