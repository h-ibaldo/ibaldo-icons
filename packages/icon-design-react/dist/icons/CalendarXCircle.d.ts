import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarXCircle: ForwardRefExoticComponent<CalendarXCircleProps & RefAttributes<SVGSVGElement>>;

export default CalendarXCircle;
export { CalendarXCircle };
