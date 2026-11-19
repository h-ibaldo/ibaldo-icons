import type { DefineComponent } from 'vue';

export interface CalendarPercentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarPercent: DefineComponent<CalendarPercentProps>;

export default CalendarPercent;
export { CalendarPercent };
