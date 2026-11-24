import type { DefineComponent } from 'vue';

export interface CalendarArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarArrowDown: DefineComponent<CalendarArrowDownProps>;

export default CalendarArrowDown;
export { CalendarArrowDown };
