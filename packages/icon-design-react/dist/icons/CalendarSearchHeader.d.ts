import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSearchHeaderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSearchHeader: ForwardRefExoticComponent<CalendarSearchHeaderProps & RefAttributes<SVGSVGElement>>;

export default CalendarSearchHeader;
export { CalendarSearchHeader };
