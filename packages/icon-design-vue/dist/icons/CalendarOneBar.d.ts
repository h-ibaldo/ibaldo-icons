import type { DefineComponent } from 'vue';

export interface CalendarOneBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarOneBar: DefineComponent<CalendarOneBarProps>;

export default CalendarOneBar;
export { CalendarOneBar };
