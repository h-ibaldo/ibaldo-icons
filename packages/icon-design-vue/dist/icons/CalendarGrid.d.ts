import type { DefineComponent } from 'vue';

export interface CalendarGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarGrid: DefineComponent<CalendarGridProps>;

export default CalendarGrid;
export { CalendarGrid };
