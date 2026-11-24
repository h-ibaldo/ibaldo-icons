import type { DefineComponent } from 'vue';

export interface CalendarStarXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarStarX: DefineComponent<CalendarStarXProps>;

export default CalendarStarX;
export { CalendarStarX };
