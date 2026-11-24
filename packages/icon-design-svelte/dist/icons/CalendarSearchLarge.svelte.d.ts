import { SvelteComponent } from 'svelte';

export interface CalendarSearchLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSearchLarge extends SvelteComponent<CalendarSearchLargeProps> {}
