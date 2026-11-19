import type { DefineComponent } from 'vue';

export interface CalendarBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarBan: DefineComponent<CalendarBanProps>;

export default CalendarBan;
export { CalendarBan };
