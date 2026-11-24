import type { DefineComponent } from 'vue';

export interface CalendarHeartCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarHeartCorner: DefineComponent<CalendarHeartCornerProps>;

export default CalendarHeartCorner;
export { CalendarHeartCorner };
