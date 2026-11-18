import { SvelteComponent } from 'svelte';

export interface CalendarRowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarRows extends SvelteComponent<CalendarRowsProps> {}
