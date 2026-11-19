import type { DefineComponent } from 'vue';

export interface CalendarXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarX: DefineComponent<CalendarXProps>;

export default CalendarX;
export { CalendarX };
