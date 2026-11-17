import { SvelteComponent } from 'svelte';

export interface CalendarSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSync extends SvelteComponent<CalendarSyncProps> {}
