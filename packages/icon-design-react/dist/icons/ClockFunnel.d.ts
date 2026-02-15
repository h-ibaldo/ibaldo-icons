import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockFunnelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockFunnel: ForwardRefExoticComponent<ClockFunnelProps & RefAttributes<SVGSVGElement>>;

export default ClockFunnel;
export { ClockFunnel };
