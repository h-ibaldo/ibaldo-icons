import type { DefineComponent } from 'vue';

export interface CalendarCoinStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCoinStack: DefineComponent<CalendarCoinStackProps>;

export default CalendarCoinStack;
export { CalendarCoinStack };
