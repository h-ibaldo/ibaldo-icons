import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarBan: ForwardRefExoticComponent<CalendarBanProps & RefAttributes<SVGSVGElement>>;

export default CalendarBan;
export { CalendarBan };
