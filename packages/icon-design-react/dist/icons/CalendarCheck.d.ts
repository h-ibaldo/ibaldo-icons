import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCheck: ForwardRefExoticComponent<CalendarCheckProps & RefAttributes<SVGSVGElement>>;

export default CalendarCheck;
export { CalendarCheck };
