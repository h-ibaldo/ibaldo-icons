import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSevenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSeven: ForwardRefExoticComponent<CalendarSevenProps & RefAttributes<SVGSVGElement>>;

export default CalendarSeven;
export { CalendarSeven };
