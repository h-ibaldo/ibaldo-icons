import type { DefineComponent } from 'vue';

export interface CalendarSearchHeaderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSearchHeader: DefineComponent<CalendarSearchHeaderProps>;

export default CalendarSearchHeader;
export { CalendarSearchHeader };
