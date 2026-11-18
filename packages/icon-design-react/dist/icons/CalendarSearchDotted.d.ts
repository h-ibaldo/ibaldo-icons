import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSearchDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSearchDotted: ForwardRefExoticComponent<CalendarSearchDottedProps & RefAttributes<SVGSVGElement>>;

export default CalendarSearchDotted;
export { CalendarSearchDotted };
