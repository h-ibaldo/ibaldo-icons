import type { DefineComponent } from 'vue';

export interface CalendarBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarBars: DefineComponent<CalendarBarsProps>;

export default CalendarBars;
export { CalendarBars };
