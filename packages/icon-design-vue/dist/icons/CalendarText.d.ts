import type { DefineComponent } from 'vue';

export interface CalendarTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarText: DefineComponent<CalendarTextProps>;

export default CalendarText;
export { CalendarText };
