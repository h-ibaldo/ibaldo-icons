import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelOvalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelOval: ForwardRefExoticComponent<FunnelOvalProps & RefAttributes<SVGSVGElement>>;

export default FunnelOval;
export { FunnelOval };
