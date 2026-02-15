import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell1NotificationAlarmAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell1NotificationAlarmAlert: ForwardRefExoticComponent<Bell1NotificationAlarmAlertProps & RefAttributes<SVGSVGElement>>;

export default Bell1NotificationAlarmAlert;
export { Bell1NotificationAlarmAlert };
