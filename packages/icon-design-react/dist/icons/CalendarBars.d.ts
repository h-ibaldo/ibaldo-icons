import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarBars: ForwardRefExoticComponent<CalendarBarsProps & RefAttributes<SVGSVGElement>>;

export default CalendarBars;
export { CalendarBars };
