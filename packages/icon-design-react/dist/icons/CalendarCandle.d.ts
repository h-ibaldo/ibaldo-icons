import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCandleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCandle: ForwardRefExoticComponent<CalendarCandleProps & RefAttributes<SVGSVGElement>>;

export default CalendarCandle;
export { CalendarCandle };
