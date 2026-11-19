import type { DefineComponent } from 'vue';

export interface CalendarEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarEdit: DefineComponent<CalendarEditProps>;

export default CalendarEdit;
export { CalendarEdit };
