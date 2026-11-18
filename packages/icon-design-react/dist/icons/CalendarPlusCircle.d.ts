import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarPlusCircle: ForwardRefExoticComponent<CalendarPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default CalendarPlusCircle;
export { CalendarPlusCircle };
