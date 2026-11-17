import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarText: ForwardRefExoticComponent<CalendarTextProps & RefAttributes<SVGSVGElement>>;

export default CalendarText;
export { CalendarText };
