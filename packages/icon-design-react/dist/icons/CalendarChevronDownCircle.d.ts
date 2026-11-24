import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarChevronDownCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarChevronDownCircle: ForwardRefExoticComponent<CalendarChevronDownCircleProps & RefAttributes<SVGSVGElement>>;

export default CalendarChevronDownCircle;
export { CalendarChevronDownCircle };
