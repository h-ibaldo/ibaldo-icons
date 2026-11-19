import type { DefineComponent } from 'vue';

export interface CalendarSeventeenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSeventeen: DefineComponent<CalendarSeventeenProps>;

export default CalendarSeventeen;
export { CalendarSeventeen };
