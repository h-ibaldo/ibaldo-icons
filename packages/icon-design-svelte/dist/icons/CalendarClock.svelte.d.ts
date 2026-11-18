import { SvelteComponent } from 'svelte';

export interface CalendarClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarClock extends SvelteComponent<CalendarClockProps> {}
