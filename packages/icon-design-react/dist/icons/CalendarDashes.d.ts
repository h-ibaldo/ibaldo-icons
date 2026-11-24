import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarDashesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarDashes: ForwardRefExoticComponent<CalendarDashesProps & RefAttributes<SVGSVGElement>>;

export default CalendarDashes;
export { CalendarDashes };
