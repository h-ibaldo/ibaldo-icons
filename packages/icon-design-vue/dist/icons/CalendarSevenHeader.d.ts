import type { DefineComponent } from 'vue';

export interface CalendarSevenHeaderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSevenHeader: DefineComponent<CalendarSevenHeaderProps>;

export default CalendarSevenHeader;
export { CalendarSevenHeader };
