import type { DefineComponent } from 'vue';

export interface CalendarDotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarDotsCircle: DefineComponent<CalendarDotsCircleProps>;

export default CalendarDotsCircle;
export { CalendarDotsCircle };
