import type { DefineComponent } from 'vue';

export interface CalendarHashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarHash: DefineComponent<CalendarHashProps>;

export default CalendarHash;
export { CalendarHash };
