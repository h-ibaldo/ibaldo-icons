import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSevenBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSevenBar: ForwardRefExoticComponent<CalendarSevenBarProps & RefAttributes<SVGSVGElement>>;

export default CalendarSevenBar;
export { CalendarSevenBar };
