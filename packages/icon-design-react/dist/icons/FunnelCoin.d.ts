import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelCoinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelCoin: ForwardRefExoticComponent<FunnelCoinProps & RefAttributes<SVGSVGElement>>;

export default FunnelCoin;
export { FunnelCoin };
