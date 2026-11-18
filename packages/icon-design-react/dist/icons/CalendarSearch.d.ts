import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSearch: ForwardRefExoticComponent<CalendarSearchProps & RefAttributes<SVGSVGElement>>;

export default CalendarSearch;
export { CalendarSearch };
