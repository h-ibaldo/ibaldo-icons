import { SvelteComponent } from 'svelte';

export interface CalendarSyncSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSyncSmall extends SvelteComponent<CalendarSyncSmallProps> {}
