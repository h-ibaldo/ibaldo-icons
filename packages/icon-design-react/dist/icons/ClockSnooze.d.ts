import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSnoozeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSnooze: ForwardRefExoticComponent<ClockSnoozeProps & RefAttributes<SVGSVGElement>>;

export default ClockSnooze;
export { ClockSnooze };
