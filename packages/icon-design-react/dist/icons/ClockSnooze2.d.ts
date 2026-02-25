import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSnooze2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSnooze2: ForwardRefExoticComponent<ClockSnooze2Props & RefAttributes<SVGSVGElement>>;

export default ClockSnooze2;
export { ClockSnooze2 };
