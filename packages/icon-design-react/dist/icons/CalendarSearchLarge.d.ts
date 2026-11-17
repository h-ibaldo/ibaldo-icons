import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSearchLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSearchLarge: ForwardRefExoticComponent<CalendarSearchLargeProps & RefAttributes<SVGSVGElement>>;

export default CalendarSearchLarge;
export { CalendarSearchLarge };
