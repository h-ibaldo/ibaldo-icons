import type { DefineComponent } from 'vue';

export interface CalendarRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarRefresh: DefineComponent<CalendarRefreshProps>;

export default CalendarRefresh;
export { CalendarRefresh };
