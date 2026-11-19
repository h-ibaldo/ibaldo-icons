import type { DefineComponent } from 'vue';

export interface CalendarSevenBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSevenBar: DefineComponent<CalendarSevenBarProps>;

export default CalendarSevenBar;
export { CalendarSevenBar };
