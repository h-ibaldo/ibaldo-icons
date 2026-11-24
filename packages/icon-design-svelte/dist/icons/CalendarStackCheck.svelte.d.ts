import { SvelteComponent } from 'svelte';

export interface CalendarStackCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarStackCheck extends SvelteComponent<CalendarStackCheckProps> {}
