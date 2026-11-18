import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarArrowRightDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarArrowRightDown: ForwardRefExoticComponent<CalendarArrowRightDownProps & RefAttributes<SVGSVGElement>>;

export default CalendarArrowRightDown;
export { CalendarArrowRightDown };
