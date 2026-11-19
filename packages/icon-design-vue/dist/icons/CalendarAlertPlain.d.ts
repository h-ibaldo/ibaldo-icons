import type { DefineComponent } from 'vue';

export interface CalendarAlertPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarAlertPlain: DefineComponent<CalendarAlertPlainProps>;

export default CalendarAlertPlain;
export { CalendarAlertPlain };
