import type { DefineComponent } from 'vue';

export interface CalendarArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarArrowUp: DefineComponent<CalendarArrowUpProps>;

export default CalendarArrowUp;
export { CalendarArrowUp };
