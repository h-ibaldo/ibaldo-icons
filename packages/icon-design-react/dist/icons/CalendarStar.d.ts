import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarStar: ForwardRefExoticComponent<CalendarStarProps & RefAttributes<SVGSVGElement>>;

export default CalendarStar;
export { CalendarStar };
