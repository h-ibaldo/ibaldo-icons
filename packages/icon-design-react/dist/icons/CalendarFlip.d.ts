import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarFlipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarFlip: ForwardRefExoticComponent<CalendarFlipProps & RefAttributes<SVGSVGElement>>;

export default CalendarFlip;
export { CalendarFlip };
