import type { DefineComponent } from 'vue';

export interface CalendarSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSearch: DefineComponent<CalendarSearchProps>;

export default CalendarSearch;
export { CalendarSearch };
