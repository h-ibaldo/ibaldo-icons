import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCircleDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCircleDouble: ForwardRefExoticComponent<CalendarCircleDoubleProps & RefAttributes<SVGSVGElement>>;

export default CalendarCircleDouble;
export { CalendarCircleDouble };
