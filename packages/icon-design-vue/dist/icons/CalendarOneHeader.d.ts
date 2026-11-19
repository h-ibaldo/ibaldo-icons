import type { DefineComponent } from 'vue';

export interface CalendarOneHeaderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarOneHeader: DefineComponent<CalendarOneHeaderProps>;

export default CalendarOneHeader;
export { CalendarOneHeader };
