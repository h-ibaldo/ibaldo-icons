import type { DefineComponent } from 'vue';

export interface CalendarDottedSparseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarDottedSparse: DefineComponent<CalendarDottedSparseProps>;

export default CalendarDottedSparse;
export { CalendarDottedSparse };
