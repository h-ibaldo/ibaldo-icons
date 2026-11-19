import type { DefineComponent } from 'vue';

export interface CalendarDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarDot: DefineComponent<CalendarDotProps>;

export default CalendarDot;
export { CalendarDot };
