import type { DefineComponent } from 'vue';

export interface CalendarCellsRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCellsRight: DefineComponent<CalendarCellsRightProps>;

export default CalendarCellsRight;
export { CalendarCellsRight };
