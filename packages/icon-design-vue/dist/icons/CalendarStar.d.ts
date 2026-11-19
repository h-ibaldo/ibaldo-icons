import type { DefineComponent } from 'vue';

export interface CalendarStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarStar: DefineComponent<CalendarStarProps>;

export default CalendarStar;
export { CalendarStar };
