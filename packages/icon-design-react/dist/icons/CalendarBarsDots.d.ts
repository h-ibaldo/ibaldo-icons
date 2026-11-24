import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarBarsDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarBarsDots: ForwardRefExoticComponent<CalendarBarsDotsProps & RefAttributes<SVGSVGElement>>;

export default CalendarBarsDots;
export { CalendarBarsDots };
