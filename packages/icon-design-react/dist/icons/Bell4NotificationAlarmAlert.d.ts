import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4NotificationAlarmAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4NotificationAlarmAlert: ForwardRefExoticComponent<Bell4NotificationAlarmAlertProps & RefAttributes<SVGSVGElement>>;

export default Bell4NotificationAlarmAlert;
export { Bell4NotificationAlarmAlert };
