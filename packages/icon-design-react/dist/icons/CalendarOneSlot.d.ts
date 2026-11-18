import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarOneSlotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarOneSlot: ForwardRefExoticComponent<CalendarOneSlotProps & RefAttributes<SVGSVGElement>>;

export default CalendarOneSlot;
export { CalendarOneSlot };
