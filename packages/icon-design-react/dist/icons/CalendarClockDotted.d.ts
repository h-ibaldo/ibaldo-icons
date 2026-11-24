import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarClockDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarClockDotted: ForwardRefExoticComponent<CalendarClockDottedProps & RefAttributes<SVGSVGElement>>;

export default CalendarClockDotted;
export { CalendarClockDotted };
