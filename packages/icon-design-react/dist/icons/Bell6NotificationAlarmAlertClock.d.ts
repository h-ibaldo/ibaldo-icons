import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6NotificationAlarmAlertClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6NotificationAlarmAlertClock: ForwardRefExoticComponent<Bell6NotificationAlarmAlertClockProps & RefAttributes<SVGSVGElement>>;

export default Bell6NotificationAlarmAlertClock;
export { Bell6NotificationAlarmAlertClock };
