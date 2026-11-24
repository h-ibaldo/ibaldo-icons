import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelX: ForwardRefExoticComponent<FunnelXProps & RefAttributes<SVGSVGElement>>;

export default FunnelX;
export { FunnelX };
