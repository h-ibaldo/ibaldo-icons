import { SvelteComponent } from 'svelte';

export interface CalendarChevronDoubleLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarChevronDoubleLeft extends SvelteComponent<CalendarChevronDoubleLeftProps> {}
