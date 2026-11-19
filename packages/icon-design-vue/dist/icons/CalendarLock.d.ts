import type { DefineComponent } from 'vue';

export interface CalendarLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarLock: DefineComponent<CalendarLockProps>;

export default CalendarLock;
export { CalendarLock };
