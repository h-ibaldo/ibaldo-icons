import { SvelteComponent } from 'svelte';

export interface CalendarEditDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarEditDotted extends SvelteComponent<CalendarEditDottedProps> {}
