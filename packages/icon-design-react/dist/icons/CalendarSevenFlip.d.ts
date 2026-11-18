import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSevenFlipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSevenFlip: ForwardRefExoticComponent<CalendarSevenFlipProps & RefAttributes<SVGSVGElement>>;

export default CalendarSevenFlip;
export { CalendarSevenFlip };
