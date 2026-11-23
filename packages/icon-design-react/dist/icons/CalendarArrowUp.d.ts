import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarArrowUp: ForwardRefExoticComponent<CalendarArrowUpProps & RefAttributes<SVGSVGElement>>;

export default CalendarArrowUp;
export { CalendarArrowUp };
