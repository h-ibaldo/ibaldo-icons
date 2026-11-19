import type { DefineComponent } from 'vue';

export interface CalendarPlusPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarPlusPlain: DefineComponent<CalendarPlusPlainProps>;

export default CalendarPlusPlain;
export { CalendarPlusPlain };
