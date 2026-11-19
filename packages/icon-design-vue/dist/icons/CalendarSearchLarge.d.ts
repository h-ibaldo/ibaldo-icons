import type { DefineComponent } from 'vue';

export interface CalendarSearchLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSearchLarge: DefineComponent<CalendarSearchLargeProps>;

export default CalendarSearchLarge;
export { CalendarSearchLarge };
