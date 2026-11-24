import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSync: ForwardRefExoticComponent<CalendarSyncProps & RefAttributes<SVGSVGElement>>;

export default CalendarSync;
export { CalendarSync };
