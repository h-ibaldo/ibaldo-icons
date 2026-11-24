import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarArrowRight: ForwardRefExoticComponent<CalendarArrowRightProps & RefAttributes<SVGSVGElement>>;

export default CalendarArrowRight;
export { CalendarArrowRight };
