import { SvelteComponent } from 'svelte';

export interface CalendarClockDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarClockDotted extends SvelteComponent<CalendarClockDottedProps> {}
