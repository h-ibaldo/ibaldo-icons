import { SvelteComponent } from 'svelte';

export interface CalendarTableProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarTable extends SvelteComponent<CalendarTableProps> {}
