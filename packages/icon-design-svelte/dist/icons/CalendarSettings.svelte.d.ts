import { SvelteComponent } from 'svelte';

export interface CalendarSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSettings extends SvelteComponent<CalendarSettingsProps> {}
