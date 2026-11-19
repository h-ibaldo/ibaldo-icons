import type { DefineComponent } from 'vue';

export interface CalendarXPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarXPlain: DefineComponent<CalendarXPlainProps>;

export default CalendarXPlain;
export { CalendarXPlain };
