import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarWarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarWarning: ForwardRefExoticComponent<CalendarWarningProps & RefAttributes<SVGSVGElement>>;

export default CalendarWarning;
export { CalendarWarning };
