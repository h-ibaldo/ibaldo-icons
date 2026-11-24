import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarPlus: ForwardRefExoticComponent<CalendarPlusProps & RefAttributes<SVGSVGElement>>;

export default CalendarPlus;
export { CalendarPlus };
