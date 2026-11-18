import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockMantelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockMantel: ForwardRefExoticComponent<ClockMantelProps & RefAttributes<SVGSVGElement>>;

export default ClockMantel;
export { ClockMantel };
