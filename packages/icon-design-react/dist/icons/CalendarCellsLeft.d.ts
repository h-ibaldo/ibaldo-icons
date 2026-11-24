import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarCellsLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarCellsLeft: ForwardRefExoticComponent<CalendarCellsLeftProps & RefAttributes<SVGSVGElement>>;

export default CalendarCellsLeft;
export { CalendarCellsLeft };
