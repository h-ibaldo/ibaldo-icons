import type { DefineComponent } from 'vue';

export interface CalendarSearchDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSearchDotted: DefineComponent<CalendarSearchDottedProps>;

export default CalendarSearchDotted;
export { CalendarSearchDotted };
