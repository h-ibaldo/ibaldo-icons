import type { DefineComponent } from 'vue';

export interface CalendarOneSlotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarOneSlot: DefineComponent<CalendarOneSlotProps>;

export default CalendarOneSlot;
export { CalendarOneSlot };
