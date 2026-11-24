import type { DefineComponent } from 'vue';

export interface CalendarClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarClock: DefineComponent<CalendarClockProps>;

export default CalendarClock;
export { CalendarClock };
