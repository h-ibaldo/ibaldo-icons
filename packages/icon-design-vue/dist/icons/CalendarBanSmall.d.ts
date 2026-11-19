import type { DefineComponent } from 'vue';

export interface CalendarBanSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarBanSmall: DefineComponent<CalendarBanSmallProps>;

export default CalendarBanSmall;
export { CalendarBanSmall };
