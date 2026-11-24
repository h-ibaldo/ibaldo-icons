import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarMusicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarMusic: ForwardRefExoticComponent<CalendarMusicProps & RefAttributes<SVGSVGElement>>;

export default CalendarMusic;
export { CalendarMusic };
