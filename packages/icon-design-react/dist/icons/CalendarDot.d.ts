import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarDot: ForwardRefExoticComponent<CalendarDotProps & RefAttributes<SVGSVGElement>>;

export default CalendarDot;
export { CalendarDot };
