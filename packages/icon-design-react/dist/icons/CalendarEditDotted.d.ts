import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarEditDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarEditDotted: ForwardRefExoticComponent<CalendarEditDottedProps & RefAttributes<SVGSVGElement>>;

export default CalendarEditDotted;
export { CalendarEditDotted };
