import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelMinus: ForwardRefExoticComponent<FunnelMinusProps & RefAttributes<SVGSVGElement>>;

export default FunnelMinus;
export { FunnelMinus };
