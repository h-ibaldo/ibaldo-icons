import type { DefineComponent } from 'vue';

export interface CalendarArrowLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarArrowLeft: DefineComponent<CalendarArrowLeftProps>;

export default CalendarArrowLeft;
export { CalendarArrowLeft };
