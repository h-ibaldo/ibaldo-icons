import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarHashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarHash: ForwardRefExoticComponent<CalendarHashProps & RefAttributes<SVGSVGElement>>;

export default CalendarHash;
export { CalendarHash };
