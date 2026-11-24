import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarOne: ForwardRefExoticComponent<CalendarOneProps & RefAttributes<SVGSVGElement>>;

export default CalendarOne;
export { CalendarOne };
