import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockFunnel2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockFunnel2: ForwardRefExoticComponent<ClockFunnel2Props & RefAttributes<SVGSVGElement>>;

export default ClockFunnel2;
export { ClockFunnel2 };
