import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCheckCircle: ForwardRefExoticComponent<CalendarCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default CalendarCheckCircle;
export { CalendarCheckCircle };
