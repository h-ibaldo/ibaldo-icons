import type { DefineComponent } from 'vue';

export interface CalendarEditCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarEditCorner: DefineComponent<CalendarEditCornerProps>;

export default CalendarEditCorner;
export { CalendarEditCorner };
