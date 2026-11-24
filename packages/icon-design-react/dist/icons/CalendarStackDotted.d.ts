import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarStackDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarStackDotted: ForwardRefExoticComponent<CalendarStackDottedProps & RefAttributes<SVGSVGElement>>;

export default CalendarStackDotted;
export { CalendarStackDotted };
