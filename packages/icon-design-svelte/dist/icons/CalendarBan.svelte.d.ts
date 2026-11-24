import { SvelteComponent } from 'svelte';

export interface CalendarBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarBan extends SvelteComponent<CalendarBanProps> {}
