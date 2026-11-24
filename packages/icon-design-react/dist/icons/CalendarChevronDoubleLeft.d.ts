import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarChevronDoubleLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarChevronDoubleLeft: ForwardRefExoticComponent<CalendarChevronDoubleLeftProps & RefAttributes<SVGSVGElement>>;

export default CalendarChevronDoubleLeft;
export { CalendarChevronDoubleLeft };
