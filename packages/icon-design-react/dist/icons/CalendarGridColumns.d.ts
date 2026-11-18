import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarGridColumnsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarGridColumns: ForwardRefExoticComponent<CalendarGridColumnsProps & RefAttributes<SVGSVGElement>>;

export default CalendarGridColumns;
export { CalendarGridColumns };
