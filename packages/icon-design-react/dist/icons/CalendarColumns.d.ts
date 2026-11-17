import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarColumnsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarColumns: ForwardRefExoticComponent<CalendarColumnsProps & RefAttributes<SVGSVGElement>>;

export default CalendarColumns;
export { CalendarColumns };
