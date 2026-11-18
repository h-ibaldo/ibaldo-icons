import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarStarXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarStarX: ForwardRefExoticComponent<CalendarStarXProps & RefAttributes<SVGSVGElement>>;

export default CalendarStarX;
export { CalendarStarX };
