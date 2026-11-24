import type { DefineComponent } from 'vue';

export interface CalendarEditTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarEditText: DefineComponent<CalendarEditTextProps>;

export default CalendarEditText;
export { CalendarEditText };
