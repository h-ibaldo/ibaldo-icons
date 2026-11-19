import type { DefineComponent } from 'vue';

export interface CalendarGridBoxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarGridBox: DefineComponent<CalendarGridBoxProps>;

export default CalendarGridBox;
export { CalendarGridBox };
