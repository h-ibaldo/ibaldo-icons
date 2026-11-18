import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarClock: ForwardRefExoticComponent<CalendarClockProps & RefAttributes<SVGSVGElement>>;

export default CalendarClock;
export { CalendarClock };
