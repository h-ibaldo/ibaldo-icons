import type { DefineComponent } from 'vue';

export interface CalendarDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarDots: DefineComponent<CalendarDotsProps>;

export default CalendarDots;
export { CalendarDots };
