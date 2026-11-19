import type { DefineComponent } from 'vue';

export interface CalendarHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarHeart: DefineComponent<CalendarHeartProps>;

export default CalendarHeart;
export { CalendarHeart };
