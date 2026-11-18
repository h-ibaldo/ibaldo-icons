import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarHeartCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarHeartCorner: ForwardRefExoticComponent<CalendarHeartCornerProps & RefAttributes<SVGSVGElement>>;

export default CalendarHeartCorner;
export { CalendarHeartCorner };
