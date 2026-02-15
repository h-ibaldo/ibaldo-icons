import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelFilter2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelFilter2: ForwardRefExoticComponent<FunnelFilter2Props & RefAttributes<SVGSVGElement>>;

export default FunnelFilter2;
export { FunnelFilter2 };
