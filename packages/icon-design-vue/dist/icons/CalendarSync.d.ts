import type { DefineComponent } from 'vue';

export interface CalendarSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSync: DefineComponent<CalendarSyncProps>;

export default CalendarSync;
export { CalendarSync };
