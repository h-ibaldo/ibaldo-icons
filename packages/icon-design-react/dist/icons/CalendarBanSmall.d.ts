import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarBanSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarBanSmall: ForwardRefExoticComponent<CalendarBanSmallProps & RefAttributes<SVGSVGElement>>;

export default CalendarBanSmall;
export { CalendarBanSmall };
