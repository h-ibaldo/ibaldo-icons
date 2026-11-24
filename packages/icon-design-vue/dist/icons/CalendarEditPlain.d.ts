import type { DefineComponent } from 'vue';

export interface CalendarEditPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarEditPlain: DefineComponent<CalendarEditPlainProps>;

export default CalendarEditPlain;
export { CalendarEditPlain };
