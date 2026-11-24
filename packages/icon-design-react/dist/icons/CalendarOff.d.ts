import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarOff: ForwardRefExoticComponent<CalendarOffProps & RefAttributes<SVGSVGElement>>;

export default CalendarOff;
export { CalendarOff };
