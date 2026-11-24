import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarStarCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarStarCheck: ForwardRefExoticComponent<CalendarStarCheckProps & RefAttributes<SVGSVGElement>>;

export default CalendarStarCheck;
export { CalendarStarCheck };
