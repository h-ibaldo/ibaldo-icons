import { SvelteComponent } from 'svelte';

export interface CalendarEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarEdit extends SvelteComponent<CalendarEditProps> {}
