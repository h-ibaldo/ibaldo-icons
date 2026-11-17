import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Funnel: ForwardRefExoticComponent<FunnelProps & RefAttributes<SVGSVGElement>>;

export default Funnel;
export { Funnel };
