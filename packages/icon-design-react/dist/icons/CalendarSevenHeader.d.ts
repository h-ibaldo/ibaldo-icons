import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSevenHeaderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSevenHeader: ForwardRefExoticComponent<CalendarSevenHeaderProps & RefAttributes<SVGSVGElement>>;

export default CalendarSevenHeader;
export { CalendarSevenHeader };
