import type { DefineComponent } from 'vue';

export interface CalendarStarCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarStarCheck: DefineComponent<CalendarStarCheckProps>;

export default CalendarStarCheck;
export { CalendarStarCheck };
