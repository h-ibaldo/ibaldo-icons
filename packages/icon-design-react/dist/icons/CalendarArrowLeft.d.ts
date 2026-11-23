import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarArrowLeft: ForwardRefExoticComponent<CalendarArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default CalendarArrowLeft;
export { CalendarArrowLeft };
