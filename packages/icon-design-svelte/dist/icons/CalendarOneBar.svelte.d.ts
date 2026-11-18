import { SvelteComponent } from 'svelte';

export interface CalendarOneBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarOneBar extends SvelteComponent<CalendarOneBarProps> {}
