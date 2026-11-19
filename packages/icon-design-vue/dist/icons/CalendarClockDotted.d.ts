import type { DefineComponent } from 'vue';

export interface CalendarClockDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarClockDotted: DefineComponent<CalendarClockDottedProps>;

export default CalendarClockDotted;
export { CalendarClockDotted };
