import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarThirtyOneBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarThirtyOneBar: ForwardRefExoticComponent<CalendarThirtyOneBarProps & RefAttributes<SVGSVGElement>>;

export default CalendarThirtyOneBar;
export { CalendarThirtyOneBar };
