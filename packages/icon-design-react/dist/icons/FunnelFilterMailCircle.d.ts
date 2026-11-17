import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelFilterMailCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelFilterMailCircle: ForwardRefExoticComponent<FunnelFilterMailCircleProps & RefAttributes<SVGSVGElement>>;

export default FunnelFilterMailCircle;
export { FunnelFilterMailCircle };
