import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarRefresh: ForwardRefExoticComponent<CalendarRefreshProps & RefAttributes<SVGSVGElement>>;

export default CalendarRefresh;
export { CalendarRefresh };
