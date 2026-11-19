import type { DefineComponent } from 'vue';

export interface CalendarStackDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarStackDotted: DefineComponent<CalendarStackDottedProps>;

export default CalendarStackDotted;
export { CalendarStackDotted };
