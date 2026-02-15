import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5NotificationAlarmAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5NotificationAlarmAlert: ForwardRefExoticComponent<Bell5NotificationAlarmAlertProps & RefAttributes<SVGSVGElement>>;

export default Bell5NotificationAlarmAlert;
export { Bell5NotificationAlarmAlert };
