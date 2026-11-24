import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCoinStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCoinStack: ForwardRefExoticComponent<CalendarCoinStackProps & RefAttributes<SVGSVGElement>>;

export default CalendarCoinStack;
export { CalendarCoinStack };
