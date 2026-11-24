import type { DefineComponent } from 'vue';

export interface CalendarSevenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSeven: DefineComponent<CalendarSevenProps>;

export default CalendarSeven;
export { CalendarSeven };
