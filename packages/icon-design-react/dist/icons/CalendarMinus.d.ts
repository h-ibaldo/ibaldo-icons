import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarMinus: ForwardRefExoticComponent<CalendarMinusProps & RefAttributes<SVGSVGElement>>;

export default CalendarMinus;
export { CalendarMinus };
