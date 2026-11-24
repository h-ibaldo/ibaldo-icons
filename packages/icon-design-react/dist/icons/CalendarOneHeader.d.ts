import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarOneHeaderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarOneHeader: ForwardRefExoticComponent<CalendarOneHeaderProps & RefAttributes<SVGSVGElement>>;

export default CalendarOneHeader;
export { CalendarOneHeader };
