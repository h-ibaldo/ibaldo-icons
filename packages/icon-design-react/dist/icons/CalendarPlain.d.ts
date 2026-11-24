import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarPlain: ForwardRefExoticComponent<CalendarPlainProps & RefAttributes<SVGSVGElement>>;

export default CalendarPlain;
export { CalendarPlain };
