import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarArrowDown: ForwardRefExoticComponent<CalendarArrowDownProps & RefAttributes<SVGSVGElement>>;

export default CalendarArrowDown;
export { CalendarArrowDown };
