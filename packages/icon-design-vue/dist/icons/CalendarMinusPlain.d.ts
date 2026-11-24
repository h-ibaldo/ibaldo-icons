import type { DefineComponent } from 'vue';

export interface CalendarMinusPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarMinusPlain: DefineComponent<CalendarMinusPlainProps>;

export default CalendarMinusPlain;
export { CalendarMinusPlain };
