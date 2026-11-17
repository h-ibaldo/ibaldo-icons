import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarGridDenseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarGridDense: ForwardRefExoticComponent<CalendarGridDenseProps & RefAttributes<SVGSVGElement>>;

export default CalendarGridDense;
export { CalendarGridDense };
