import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2NotificationAlarmAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2NotificationAlarmAlert: ForwardRefExoticComponent<Bell2NotificationAlarmAlertProps & RefAttributes<SVGSVGElement>>;

export default Bell2NotificationAlarmAlert;
export { Bell2NotificationAlarmAlert };
