import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockNotificationCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockNotificationCircle: ForwardRefExoticComponent<ClockNotificationCircleProps & RefAttributes<SVGSVGElement>>;

export default ClockNotificationCircle;
export { ClockNotificationCircle };
