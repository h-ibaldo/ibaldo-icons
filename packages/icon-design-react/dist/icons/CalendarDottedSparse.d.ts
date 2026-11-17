import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarDottedSparseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarDottedSparse: ForwardRefExoticComponent<CalendarDottedSparseProps & RefAttributes<SVGSVGElement>>;

export default CalendarDottedSparse;
export { CalendarDottedSparse };
