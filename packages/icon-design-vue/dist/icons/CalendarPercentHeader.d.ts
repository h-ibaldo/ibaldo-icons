import type { DefineComponent } from 'vue';

export interface CalendarPercentHeaderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarPercentHeader: DefineComponent<CalendarPercentHeaderProps>;

export default CalendarPercentHeader;
export { CalendarPercentHeader };
