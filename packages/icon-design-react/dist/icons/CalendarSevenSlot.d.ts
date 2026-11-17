import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSevenSlotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSevenSlot: ForwardRefExoticComponent<CalendarSevenSlotProps & RefAttributes<SVGSVGElement>>;

export default CalendarSevenSlot;
export { CalendarSevenSlot };
