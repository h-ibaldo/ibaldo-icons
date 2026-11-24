import type { DefineComponent } from 'vue';

export interface CalendarArrowLeftRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarArrowLeftRight: DefineComponent<CalendarArrowLeftRightProps>;

export default CalendarArrowLeftRight;
export { CalendarArrowLeftRight };
