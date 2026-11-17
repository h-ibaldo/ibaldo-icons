import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarDotted: ForwardRefExoticComponent<CalendarDottedProps & RefAttributes<SVGSVGElement>>;

export default CalendarDotted;
export { CalendarDotted };
