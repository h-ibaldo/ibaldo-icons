import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarArrowLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarArrowLeftRight: ForwardRefExoticComponent<CalendarArrowLeftRightProps & RefAttributes<SVGSVGElement>>;

export default CalendarArrowLeftRight;
export { CalendarArrowLeftRight };
