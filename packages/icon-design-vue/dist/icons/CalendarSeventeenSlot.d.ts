import type { DefineComponent } from 'vue';

export interface CalendarSeventeenSlotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSeventeenSlot: DefineComponent<CalendarSeventeenSlotProps>;

export default CalendarSeventeenSlot;
export { CalendarSeventeenSlot };
