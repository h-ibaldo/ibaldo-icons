import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarXPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarXPlain: ForwardRefExoticComponent<CalendarXPlainProps & RefAttributes<SVGSVGElement>>;

export default CalendarXPlain;
export { CalendarXPlain };
