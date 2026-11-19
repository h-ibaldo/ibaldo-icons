import type { DefineComponent } from 'vue';

export interface CalendarSevenFlipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSevenFlip: DefineComponent<CalendarSevenFlipProps>;

export default CalendarSevenFlip;
export { CalendarSevenFlip };
