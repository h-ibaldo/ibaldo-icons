import type { DefineComponent } from 'vue';

export interface CalendarArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarArrowRight: DefineComponent<CalendarArrowRightProps>;

export default CalendarArrowRight;
export { CalendarArrowRight };
