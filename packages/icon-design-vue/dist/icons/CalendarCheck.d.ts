import type { DefineComponent } from 'vue';

export interface CalendarCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCheck: DefineComponent<CalendarCheckProps>;

export default CalendarCheck;
export { CalendarCheck };
