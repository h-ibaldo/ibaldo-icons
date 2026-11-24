import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarPercentHeaderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarPercentHeader: ForwardRefExoticComponent<CalendarPercentHeaderProps & RefAttributes<SVGSVGElement>>;

export default CalendarPercentHeader;
export { CalendarPercentHeader };
