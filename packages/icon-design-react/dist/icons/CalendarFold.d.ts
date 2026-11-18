import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarFoldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarFold: ForwardRefExoticComponent<CalendarFoldProps & RefAttributes<SVGSVGElement>>;

export default CalendarFold;
export { CalendarFold };
