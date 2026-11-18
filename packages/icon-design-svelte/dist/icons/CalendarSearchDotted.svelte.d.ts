import { SvelteComponent } from 'svelte';

export interface CalendarSearchDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSearchDotted extends SvelteComponent<CalendarSearchDottedProps> {}
