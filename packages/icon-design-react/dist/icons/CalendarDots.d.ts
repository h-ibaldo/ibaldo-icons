import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarDots: ForwardRefExoticComponent<CalendarDotsProps & RefAttributes<SVGSVGElement>>;

export default CalendarDots;
export { CalendarDots };
