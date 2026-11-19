import type { DefineComponent } from 'vue';

export interface CalendarEyeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarEye: DefineComponent<CalendarEyeProps>;

export default CalendarEye;
export { CalendarEye };
