import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarRowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarRows: ForwardRefExoticComponent<CalendarRowsProps & RefAttributes<SVGSVGElement>>;

export default CalendarRows;
export { CalendarRows };
