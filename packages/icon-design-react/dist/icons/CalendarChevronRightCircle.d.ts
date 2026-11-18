import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarChevronRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarChevronRightCircle: ForwardRefExoticComponent<CalendarChevronRightCircleProps & RefAttributes<SVGSVGElement>>;

export default CalendarChevronRightCircle;
export { CalendarChevronRightCircle };
