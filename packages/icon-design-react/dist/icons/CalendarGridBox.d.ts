import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarGridBoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarGridBox: ForwardRefExoticComponent<CalendarGridBoxProps & RefAttributes<SVGSVGElement>>;

export default CalendarGridBox;
export { CalendarGridBox };
