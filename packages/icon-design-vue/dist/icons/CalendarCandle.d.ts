import type { DefineComponent } from 'vue';

export interface CalendarCandleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCandle: DefineComponent<CalendarCandleProps>;

export default CalendarCandle;
export { CalendarCandle };
