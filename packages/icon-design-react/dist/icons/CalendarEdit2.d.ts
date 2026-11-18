import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarEdit2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarEdit2: ForwardRefExoticComponent<CalendarEdit2Props & RefAttributes<SVGSVGElement>>;

export default CalendarEdit2;
export { CalendarEdit2 };
