import { SvelteComponent } from 'svelte';

export interface CalendarDayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarDay extends SvelteComponent<CalendarDayProps> {}
