import type { DefineComponent } from 'vue';

export interface CalendarCheckPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCheckPlain: DefineComponent<CalendarCheckPlainProps>;

export default CalendarCheckPlain;
export { CalendarCheckPlain };
