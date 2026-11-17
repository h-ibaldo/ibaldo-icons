import { SvelteComponent } from 'svelte';

export interface CalendarAlertPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarAlertPlain extends SvelteComponent<CalendarAlertPlainProps> {}
