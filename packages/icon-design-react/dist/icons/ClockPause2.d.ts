import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPause2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPause2: ForwardRefExoticComponent<ClockPause2Props & RefAttributes<SVGSVGElement>>;

export default ClockPause2;
export { ClockPause2 };
