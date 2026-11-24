import type { DefineComponent } from 'vue';

export interface CalendarBarsSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarBarsSplit: DefineComponent<CalendarBarsSplitProps>;

export default CalendarBarsSplit;
export { CalendarBarsSplit };
