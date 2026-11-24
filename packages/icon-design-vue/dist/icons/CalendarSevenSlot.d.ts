import type { DefineComponent } from 'vue';

export interface CalendarSevenSlotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSevenSlot: DefineComponent<CalendarSevenSlotProps>;

export default CalendarSevenSlot;
export { CalendarSevenSlot };
