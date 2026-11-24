import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarClockPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarClockPlain: ForwardRefExoticComponent<CalendarClockPlainProps & RefAttributes<SVGSVGElement>>;

export default CalendarClockPlain;
export { CalendarClockPlain };
