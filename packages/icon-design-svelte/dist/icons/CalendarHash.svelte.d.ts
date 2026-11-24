import { SvelteComponent } from 'svelte';

export interface CalendarHashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarHash extends SvelteComponent<CalendarHashProps> {}
