import type { DefineComponent } from 'vue';

export interface CalendarFoldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarFold: DefineComponent<CalendarFoldProps>;

export default CalendarFold;
export { CalendarFold };
