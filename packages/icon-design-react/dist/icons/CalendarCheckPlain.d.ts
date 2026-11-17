import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCheckPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCheckPlain: ForwardRefExoticComponent<CalendarCheckPlainProps & RefAttributes<SVGSVGElement>>;

export default CalendarCheckPlain;
export { CalendarCheckPlain };
