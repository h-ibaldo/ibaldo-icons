import type { DefineComponent } from 'vue';

export interface CalendarSettingsHeaderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSettingsHeader: DefineComponent<CalendarSettingsHeaderProps>;

export default CalendarSettingsHeader;
export { CalendarSettingsHeader };
