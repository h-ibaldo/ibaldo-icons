import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarThirtyOneSlotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarThirtyOneSlot: ForwardRefExoticComponent<CalendarThirtyOneSlotProps & RefAttributes<SVGSVGElement>>;

export default CalendarThirtyOneSlot;
export { CalendarThirtyOneSlot };
