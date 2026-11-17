import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarLock: ForwardRefExoticComponent<CalendarLockProps & RefAttributes<SVGSVGElement>>;

export default CalendarLock;
export { CalendarLock };
