import type { DefineComponent } from 'vue';

export interface CalendarCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCurl: DefineComponent<CalendarCurlProps>;

export default CalendarCurl;
export { CalendarCurl };
