import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarClockCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarClockCenter: ForwardRefExoticComponent<CalendarClockCenterProps & RefAttributes<SVGSVGElement>>;

export default CalendarClockCenter;
export { CalendarClockCenter };
