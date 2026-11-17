import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelSimpleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelSimple: ForwardRefExoticComponent<FunnelSimpleProps & RefAttributes<SVGSVGElement>>;

export default FunnelSimple;
export { FunnelSimple };
