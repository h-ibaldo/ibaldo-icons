import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockBanTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockBanTop: ForwardRefExoticComponent<ClockBanTopProps & RefAttributes<SVGSVGElement>>;

export default ClockBanTop;
export { ClockBanTop };
