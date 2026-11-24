import { SvelteComponent } from 'svelte';

export interface CalendarCakeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarCake extends SvelteComponent<CalendarCakeProps> {}
