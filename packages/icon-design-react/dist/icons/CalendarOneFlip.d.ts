import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarOneFlipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarOneFlip: ForwardRefExoticComponent<CalendarOneFlipProps & RefAttributes<SVGSVGElement>>;

export default CalendarOneFlip;
export { CalendarOneFlip };
