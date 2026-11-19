import type { DefineComponent } from 'vue';

export interface CalendarEditDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarEditDotted: DefineComponent<CalendarEditDottedProps>;

export default CalendarEditDotted;
export { CalendarEditDotted };
