import type { DefineComponent } from 'vue';

export interface CalendarDollarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarDollar: DefineComponent<CalendarDollarProps>;

export default CalendarDollar;
export { CalendarDollar };
