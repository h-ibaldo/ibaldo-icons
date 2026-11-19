import type { DefineComponent } from 'vue';

export interface CalendarOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarOne: DefineComponent<CalendarOneProps>;

export default CalendarOne;
export { CalendarOne };
