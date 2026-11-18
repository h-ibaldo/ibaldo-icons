import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarBarsSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarBarsSplit: ForwardRefExoticComponent<CalendarBarsSplitProps & RefAttributes<SVGSVGElement>>;

export default CalendarBarsSplit;
export { CalendarBarsSplit };
