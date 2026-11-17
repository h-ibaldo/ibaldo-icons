import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarGrid: ForwardRefExoticComponent<CalendarGridProps & RefAttributes<SVGSVGElement>>;

export default CalendarGrid;
export { CalendarGrid };
