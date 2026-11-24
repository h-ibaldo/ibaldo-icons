import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarPercentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarPercent: ForwardRefExoticComponent<CalendarPercentProps & RefAttributes<SVGSVGElement>>;

export default CalendarPercent;
export { CalendarPercent };
