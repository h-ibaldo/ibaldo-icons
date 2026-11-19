import type { DefineComponent } from 'vue';

export interface CalendarGridDenseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarGridDense: DefineComponent<CalendarGridDenseProps>;

export default CalendarGridDense;
export { CalendarGridDense };
