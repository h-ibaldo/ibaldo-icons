import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockBan: ForwardRefExoticComponent<ClockBanProps & RefAttributes<SVGSVGElement>>;

export default ClockBan;
export { ClockBan };
