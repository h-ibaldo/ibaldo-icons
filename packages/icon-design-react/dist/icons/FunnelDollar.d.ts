import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelDollarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelDollar: ForwardRefExoticComponent<FunnelDollarProps & RefAttributes<SVGSVGElement>>;

export default FunnelDollar;
export { FunnelDollar };
