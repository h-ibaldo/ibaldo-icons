import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelFilter1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelFilter1: ForwardRefExoticComponent<FunnelFilter1Props & RefAttributes<SVGSVGElement>>;

export default FunnelFilter1;
export { FunnelFilter1 };
