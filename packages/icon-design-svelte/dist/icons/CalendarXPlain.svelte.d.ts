import { SvelteComponent } from 'svelte';

export interface CalendarXPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarXPlain extends SvelteComponent<CalendarXPlainProps> {}
