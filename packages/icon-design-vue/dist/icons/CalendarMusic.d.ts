import type { DefineComponent } from 'vue';

export interface CalendarMusicProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarMusic: DefineComponent<CalendarMusicProps>;

export default CalendarMusic;
export { CalendarMusic };
