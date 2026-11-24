import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarMinusCircle: ForwardRefExoticComponent<CalendarMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default CalendarMinusCircle;
export { CalendarMinusCircle };
