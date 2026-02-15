import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3NotificationAlarmAlertClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3NotificationAlarmAlertClock: ForwardRefExoticComponent<Bell3NotificationAlarmAlertClockProps & RefAttributes<SVGSVGElement>>;

export default Bell3NotificationAlarmAlertClock;
export { Bell3NotificationAlarmAlertClock };
