import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarAlertPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarAlertPlain: ForwardRefExoticComponent<CalendarAlertPlainProps & RefAttributes<SVGSVGElement>>;

export default CalendarAlertPlain;
export { CalendarAlertPlain };
