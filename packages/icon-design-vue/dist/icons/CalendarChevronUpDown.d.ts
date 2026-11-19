import type { DefineComponent } from 'vue';

export interface CalendarChevronUpDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarChevronUpDown: DefineComponent<CalendarChevronUpDownProps>;

export default CalendarChevronUpDown;
export { CalendarChevronUpDown };
