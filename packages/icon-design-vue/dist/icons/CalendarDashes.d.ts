import type { DefineComponent } from 'vue';

export interface CalendarDashesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarDashes: DefineComponent<CalendarDashesProps>;

export default CalendarDashes;
export { CalendarDashes };
