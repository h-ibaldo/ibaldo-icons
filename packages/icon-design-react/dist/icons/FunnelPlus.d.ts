import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelPlus: ForwardRefExoticComponent<FunnelPlusProps & RefAttributes<SVGSVGElement>>;

export default FunnelPlus;
export { FunnelPlus };
