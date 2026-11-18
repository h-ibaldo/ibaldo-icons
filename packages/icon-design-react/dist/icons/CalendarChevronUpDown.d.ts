import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarChevronUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarChevronUpDown: ForwardRefExoticComponent<CalendarChevronUpDownProps & RefAttributes<SVGSVGElement>>;

export default CalendarChevronUpDown;
export { CalendarChevronUpDown };
