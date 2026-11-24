import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarStackCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarStackCheck: ForwardRefExoticComponent<CalendarStackCheckProps & RefAttributes<SVGSVGElement>>;

export default CalendarStackCheck;
export { CalendarStackCheck };
