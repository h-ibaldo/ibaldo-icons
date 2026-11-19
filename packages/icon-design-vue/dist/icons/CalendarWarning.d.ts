import type { DefineComponent } from 'vue';

export interface CalendarWarningProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarWarning: DefineComponent<CalendarWarningProps>;

export default CalendarWarning;
export { CalendarWarning };
