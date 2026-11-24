import type { DefineComponent } from 'vue';

export interface CalendarOneFlipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarOneFlip: DefineComponent<CalendarOneFlipProps>;

export default CalendarOneFlip;
export { CalendarOneFlip };
