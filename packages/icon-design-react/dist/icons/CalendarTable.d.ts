import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarTableProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarTable: ForwardRefExoticComponent<CalendarTableProps & RefAttributes<SVGSVGElement>>;

export default CalendarTable;
export { CalendarTable };
