import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarXCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarXCorner: ForwardRefExoticComponent<CalendarXCornerProps & RefAttributes<SVGSVGElement>>;

export default CalendarXCorner;
export { CalendarXCorner };
