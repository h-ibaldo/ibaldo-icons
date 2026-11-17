import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarX: ForwardRefExoticComponent<CalendarXProps & RefAttributes<SVGSVGElement>>;

export default CalendarX;
export { CalendarX };
