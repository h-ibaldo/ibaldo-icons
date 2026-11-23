import type { DefineComponent } from 'vue';

export interface CalendarBarsDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarBarsDots: DefineComponent<CalendarBarsDotsProps>;

export default CalendarBarsDots;
export { CalendarBarsDots };
