import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarHeart: ForwardRefExoticComponent<CalendarHeartProps & RefAttributes<SVGSVGElement>>;

export default CalendarHeart;
export { CalendarHeart };
