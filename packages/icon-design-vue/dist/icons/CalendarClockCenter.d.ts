import type { DefineComponent } from 'vue';

export interface CalendarClockCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarClockCenter: DefineComponent<CalendarClockCenterProps>;

export default CalendarClockCenter;
export { CalendarClockCenter };
