import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarEditTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarEditText: ForwardRefExoticComponent<CalendarEditTextProps & RefAttributes<SVGSVGElement>>;

export default CalendarEditText;
export { CalendarEditText };
