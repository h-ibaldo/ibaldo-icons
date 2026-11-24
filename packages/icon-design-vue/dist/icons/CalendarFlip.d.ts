import type { DefineComponent } from 'vue';

export interface CalendarFlipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarFlip: DefineComponent<CalendarFlipProps>;

export default CalendarFlip;
export { CalendarFlip };
