import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarOneBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarOneBar: ForwardRefExoticComponent<CalendarOneBarProps & RefAttributes<SVGSVGElement>>;

export default CalendarOneBar;
export { CalendarOneBar };
