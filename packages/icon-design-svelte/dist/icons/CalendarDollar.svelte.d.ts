import { SvelteComponent } from 'svelte';

export interface CalendarDollarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarDollar extends SvelteComponent<CalendarDollarProps> {}
