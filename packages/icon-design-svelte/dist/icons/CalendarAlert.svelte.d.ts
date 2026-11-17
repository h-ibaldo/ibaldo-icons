import { SvelteComponent } from 'svelte';

export interface CalendarAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarAlert extends SvelteComponent<CalendarAlertProps> {}
