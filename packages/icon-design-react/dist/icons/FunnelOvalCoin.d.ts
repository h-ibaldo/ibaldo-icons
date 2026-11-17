import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelOvalCoinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelOvalCoin: ForwardRefExoticComponent<FunnelOvalCoinProps & RefAttributes<SVGSVGElement>>;

export default FunnelOvalCoin;
export { FunnelOvalCoin };
