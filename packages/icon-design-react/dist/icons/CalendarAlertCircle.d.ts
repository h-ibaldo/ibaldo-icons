import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarAlertCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarAlertCircle: ForwardRefExoticComponent<CalendarAlertCircleProps & RefAttributes<SVGSVGElement>>;

export default CalendarAlertCircle;
export { CalendarAlertCircle };
