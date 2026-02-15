import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6NotificationAlarmAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6NotificationAlarmAlert: ForwardRefExoticComponent<Bell6NotificationAlarmAlertProps & RefAttributes<SVGSVGElement>>;

export default Bell6NotificationAlarmAlert;
export { Bell6NotificationAlarmAlert };
