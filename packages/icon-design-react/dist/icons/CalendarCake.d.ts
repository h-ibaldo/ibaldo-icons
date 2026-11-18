import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCakeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCake: ForwardRefExoticComponent<CalendarCakeProps & RefAttributes<SVGSVGElement>>;

export default CalendarCake;
export { CalendarCake };
