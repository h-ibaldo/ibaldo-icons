import type { DefineComponent } from 'vue';

export interface CalendarMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarMinus: DefineComponent<CalendarMinusProps>;

export default CalendarMinus;
export { CalendarMinus };
