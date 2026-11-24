import type { DefineComponent } from 'vue';

export interface CalendarAlertCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarAlertCircle: DefineComponent<CalendarAlertCircleProps>;

export default CalendarAlertCircle;
export { CalendarAlertCircle };
