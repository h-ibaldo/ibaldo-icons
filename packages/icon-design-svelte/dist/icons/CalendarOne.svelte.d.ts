import { SvelteComponent } from 'svelte';

export interface CalendarOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarOne extends SvelteComponent<CalendarOneProps> {}
