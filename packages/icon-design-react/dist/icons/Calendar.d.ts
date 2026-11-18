import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Calendar: ForwardRefExoticComponent<CalendarProps & RefAttributes<SVGSVGElement>>;

export default Calendar;
export { Calendar };
