import { SvelteComponent } from 'svelte';

export interface CalendarThirtyOneBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarThirtyOneBar extends SvelteComponent<CalendarThirtyOneBarProps> {}
