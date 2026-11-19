import type { DefineComponent } from 'vue';

export interface CalendarPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarPlain: DefineComponent<CalendarPlainProps>;

export default CalendarPlain;
export { CalendarPlain };
