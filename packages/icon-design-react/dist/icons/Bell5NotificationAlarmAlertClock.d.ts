import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5NotificationAlarmAlertClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5NotificationAlarmAlertClock: ForwardRefExoticComponent<Bell5NotificationAlarmAlertClockProps & RefAttributes<SVGSVGElement>>;

export default Bell5NotificationAlarmAlertClock;
export { Bell5NotificationAlarmAlertClock };
