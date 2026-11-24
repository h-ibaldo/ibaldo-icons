import type { DefineComponent } from 'vue';

export interface CalendarSeventeenBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSeventeenBar: DefineComponent<CalendarSeventeenBarProps>;

export default CalendarSeventeenBar;
export { CalendarSeventeenBar };
