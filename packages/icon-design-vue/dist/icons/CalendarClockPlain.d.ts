import type { DefineComponent } from 'vue';

export interface CalendarClockPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarClockPlain: DefineComponent<CalendarClockPlainProps>;

export default CalendarClockPlain;
export { CalendarClockPlain };
