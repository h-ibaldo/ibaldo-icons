import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarDayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarDay: ForwardRefExoticComponent<CalendarDayProps & RefAttributes<SVGSVGElement>>;

export default CalendarDay;
export { CalendarDay };
