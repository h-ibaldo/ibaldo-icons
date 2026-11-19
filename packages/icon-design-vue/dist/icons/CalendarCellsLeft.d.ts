import type { DefineComponent } from 'vue';

export interface CalendarCellsLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCellsLeft: DefineComponent<CalendarCellsLeftProps>;

export default CalendarCellsLeft;
export { CalendarCellsLeft };
