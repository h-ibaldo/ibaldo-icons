import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarEdit: ForwardRefExoticComponent<CalendarEditProps & RefAttributes<SVGSVGElement>>;

export default CalendarEdit;
export { CalendarEdit };
