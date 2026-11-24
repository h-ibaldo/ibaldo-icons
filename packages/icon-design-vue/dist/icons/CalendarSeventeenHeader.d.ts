import type { DefineComponent } from 'vue';

export interface CalendarSeventeenHeaderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSeventeenHeader: DefineComponent<CalendarSeventeenHeaderProps>;

export default CalendarSeventeenHeader;
export { CalendarSeventeenHeader };
