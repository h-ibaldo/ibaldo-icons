import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockNotificationCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockNotificationCircle2: ForwardRefExoticComponent<ClockNotificationCircle2Props & RefAttributes<SVGSVGElement>>;

export default ClockNotificationCircle2;
export { ClockNotificationCircle2 };
