import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSyncSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSyncSmall: ForwardRefExoticComponent<CalendarSyncSmallProps & RefAttributes<SVGSVGElement>>;

export default CalendarSyncSmall;
export { CalendarSyncSmall };
