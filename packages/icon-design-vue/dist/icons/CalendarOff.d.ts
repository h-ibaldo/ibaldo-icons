import type { DefineComponent } from 'vue';

export interface CalendarOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarOff: DefineComponent<CalendarOffProps>;

export default CalendarOff;
export { CalendarOff };
