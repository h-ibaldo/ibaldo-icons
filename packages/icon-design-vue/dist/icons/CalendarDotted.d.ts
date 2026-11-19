import type { DefineComponent } from 'vue';

export interface CalendarDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarDotted: DefineComponent<CalendarDottedProps>;

export default CalendarDotted;
export { CalendarDotted };
