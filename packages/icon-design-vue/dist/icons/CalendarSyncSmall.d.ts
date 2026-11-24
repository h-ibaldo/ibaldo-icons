import type { DefineComponent } from 'vue';

export interface CalendarSyncSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSyncSmall: DefineComponent<CalendarSyncSmallProps>;

export default CalendarSyncSmall;
export { CalendarSyncSmall };
