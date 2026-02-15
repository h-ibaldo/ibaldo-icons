import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3NotificationAlarmAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3NotificationAlarmAlert: ForwardRefExoticComponent<Bell3NotificationAlarmAlertProps & RefAttributes<SVGSVGElement>>;

export default Bell3NotificationAlarmAlert;
export { Bell3NotificationAlarmAlert };
