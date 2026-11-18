import { SvelteComponent } from 'svelte';

export interface CalendarRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarRefresh extends SvelteComponent<CalendarRefreshProps> {}
