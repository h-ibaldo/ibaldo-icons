import type { DefineComponent } from 'vue';

export interface CalendarCakeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCake: DefineComponent<CalendarCakeProps>;

export default CalendarCake;
export { CalendarCake };
