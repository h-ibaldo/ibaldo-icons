import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCurl: ForwardRefExoticComponent<CalendarCurlProps & RefAttributes<SVGSVGElement>>;

export default CalendarCurl;
export { CalendarCurl };
