import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarEditPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarEditPlain: ForwardRefExoticComponent<CalendarEditPlainProps & RefAttributes<SVGSVGElement>>;

export default CalendarEditPlain;
export { CalendarEditPlain };
