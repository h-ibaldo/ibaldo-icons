import type { DefineComponent } from 'vue';

export interface CalendarAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarAlert: DefineComponent<CalendarAlertProps>;

export default CalendarAlert;
export { CalendarAlert };
