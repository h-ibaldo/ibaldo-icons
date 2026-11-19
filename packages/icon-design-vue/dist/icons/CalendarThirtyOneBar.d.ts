import type { DefineComponent } from 'vue';

export interface CalendarThirtyOneBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarThirtyOneBar: DefineComponent<CalendarThirtyOneBarProps>;

export default CalendarThirtyOneBar;
export { CalendarThirtyOneBar };
