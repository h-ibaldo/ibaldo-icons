import type { DefineComponent } from 'vue';

export interface CalendarPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarPlus: DefineComponent<CalendarPlusProps>;

export default CalendarPlus;
export { CalendarPlus };
