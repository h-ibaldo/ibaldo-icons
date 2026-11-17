import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarDollarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarDollar: ForwardRefExoticComponent<CalendarDollarProps & RefAttributes<SVGSVGElement>>;

export default CalendarDollar;
export { CalendarDollar };
