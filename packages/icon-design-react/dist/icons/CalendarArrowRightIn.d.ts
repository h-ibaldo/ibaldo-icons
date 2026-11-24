import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarArrowRightInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarArrowRightIn: ForwardRefExoticComponent<CalendarArrowRightInProps & RefAttributes<SVGSVGElement>>;

export default CalendarArrowRightIn;
export { CalendarArrowRightIn };
