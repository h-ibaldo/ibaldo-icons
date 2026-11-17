import { SvelteComponent } from 'svelte';

export interface CalendarCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarCurl extends SvelteComponent<CalendarCurlProps> {}
