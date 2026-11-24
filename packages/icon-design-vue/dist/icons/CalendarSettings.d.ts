import type { DefineComponent } from 'vue';

export interface CalendarSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSettings: DefineComponent<CalendarSettingsProps>;

export default CalendarSettings;
export { CalendarSettings };
