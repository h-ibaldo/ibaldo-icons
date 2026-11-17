import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSeventeenSlotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSeventeenSlot: ForwardRefExoticComponent<CalendarSeventeenSlotProps & RefAttributes<SVGSVGElement>>;

export default CalendarSeventeenSlot;
export { CalendarSeventeenSlot };
